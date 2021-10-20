import Database from './db/cosmos'
import { AddTrial, Trial as TrialType, UpdateTrial, RunInput, Run as RunType } from '../types'
import { v4 as uuidv4 } from 'uuid'

export default class Trial {
  db = new Database()
  containerId = 'trial'

  async getTrial(trialId: string): Promise<TrialType> {
    const trial = await this.db.getItemById<TrialType>(this.containerId, trialId, trialId)
    return trial
  }

  async addTrial(trialId: string, trialInput: AddTrial): Promise<TrialType> {
    const trial: TrialType = { ...trialInput } as TrialType

    trial.type = 'trial'
    trial.id = trialId
    trial.trialId = trialId
    const newTrial = await this.db.addItem<TrialType>(this.containerId, trial)
    return newTrial
  }

  async updateTrial(trialId: string, updatedTrial: UpdateTrial): Promise<TrialType> {
    const updated = this.db.updateItem(this.containerId, trialId, trialId, updatedTrial)
    return updated
  }

  async addTrialRun(runId: string, personId: string, dogId: string, trialId: string, runInput: RunInput): Promise<RunType> {
    const trialRun: RunType = { ...runInput } as RunType

    trialRun.type = 'run'
    trialRun.id = uuidv4()
    trialRun.runId = runId
    trialRun.personId = personId
    trialRun.dogId = dogId
    trialRun.trialId = trialId

    const newTrialRun = await this.db.addItem<RunType>(this.containerId, trialRun)
    return newTrialRun
  }
}

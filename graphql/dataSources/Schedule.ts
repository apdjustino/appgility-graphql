import Database from './db/cosmos'
import { v4 as uuidv4 } from 'uuid'
import { RunInput, ScheduleRun as RunType } from '../types'

export default class Schedule {
  db = new Database()
  containerId = 'schedule'

  async addScheduleRun(runId: string, personId: string, dogId: string, trialId: string, runInput: RunInput): Promise<RunType> {
    const scheduleRunToAdd: RunType = {} as RunType

    scheduleRunToAdd.runId = runId
    scheduleRunToAdd.id = uuidv4()
    scheduleRunToAdd.personId = personId
    scheduleRunToAdd.dogId = dogId
    scheduleRunToAdd.trialId = trialId
    scheduleRunToAdd.level = runInput.level
    scheduleRunToAdd.agilityClass = runInput.agilityClass
    scheduleRunToAdd.jumpHeight = runInput.jumpHeight
    scheduleRunToAdd.parent = null
    scheduleRunToAdd.preferred = runInput.preferred
    scheduleRunToAdd.type = 'run'
    scheduleRunToAdd.group = runInput.group
    
    const newScheduleRun = await this.db.addItem<RunType>(this.containerId, scheduleRunToAdd)
    return newScheduleRun
  }
}
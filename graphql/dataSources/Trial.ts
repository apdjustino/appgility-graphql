import { v4 as uuidv4 } from 'uuid';
import { CreateNewTrialInput, Trial as TrialType } from '../types'
import Database from './db/cosmos'

export default class Trial {
  db = new Database()
  containerId = 'trial'

  async addTrial(input: CreateNewTrialInput): Promise<TrialType> {
    const trialInput: TrialType = { ...input } as TrialType
    const id = uuidv4()
    trialInput.type= 'trial'    
    trialInput.trialId = id
    trialInput.status = 'registration'
    const newTrial = await this.db.addItem(this.containerId, trialInput)
    return newTrial 
  }
}
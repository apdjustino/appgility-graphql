import { v4 as uuidv4 } from 'uuid';
import { CreateNewEventInput, Event as EventType } from '../types'
import Database from './db/cosmos'

export default class Event {
  db = new Database()
  containerId = 'trial'

  async addEvent(input: CreateNewEventInput): Promise<EventType> {
    const eventInput: EventType = { ...input } as EventType
    const id = uuidv4()
    eventInput.type= 'event'    
    eventInput.eventId = id
    eventInput.status = 'New'
    const newTrial = await this.db.addItem(this.containerId, eventInput)
    return newTrial 
  }
}
import { v4 as uuidv4 } from 'uuid';
import { CreateNewEventInput, Event as EventType, UpdateEventInput } from '../types'
import { QuerySpec } from '../types/dataSources';
import Database from './db/cosmos'

export default class Event {
  db = new Database()
  containerId = 'event'

  async addEvent(input: CreateNewEventInput): Promise<EventType> {
    const eventInput: EventType = { ...input } as EventType
    const id = uuidv4()
    eventInput.type= 'event'    
    eventInput.eventId = id
    eventInput.status = 'New'
    eventInput.id = id
    const newTrial = await this.db.addItem(this.containerId, eventInput)
    return newTrial 
  }

  async getEvent(eventId: string): Promise<EventType> {
    const event = await this.db.getItemById<EventType>(this.containerId, eventId, eventId)
    return event
  }

  async updateEvent(eventId: string, updatedEvent: UpdateEventInput): Promise<EventType> {
    const updated = await this.db.updateItem(this.containerId, eventId, eventId, updatedEvent)
    return updated
  }
}
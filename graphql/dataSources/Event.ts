import { FeedOptions, SqlQuerySpec } from '@azure/cosmos'
import { v4 as uuidv4 } from 'uuid'
import { CreateNewEventInput, Event as EventType, UpdateEventInput, EventTrial as EventTrialType, AddEventTrial, UpdateEventTrial } from '../types'
import Database from './db/cosmos'

export default class Event {
  db = new Database()
  containerId = 'event'

  async addEvent(input: CreateNewEventInput): Promise<EventType> {
    const eventInput: EventType = { ...input } as EventType
    const id = uuidv4()
    eventInput.type = 'event'
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

  async addEventTrial(trialId: string, eventTrial: AddEventTrial): Promise<EventTrialType> {
    const newEventTrial: EventTrialType = { ...eventTrial } as EventTrialType
    newEventTrial.type = 'trial'
    newEventTrial.id = trialId
    newEventTrial.trialId = trialId
    const newItem = await this.db.addItem(this.containerId, newEventTrial)
    return newItem
  }

  async getEventTrial(trialId: string, eventId: string): Promise<EventTrialType> {
    const eventTrial = await this.db.getItemById<EventTrialType>(this.containerId, trialId, eventId)
    return eventTrial
  }

  async getEventTrials(eventId: string): Promise<EventTrialType[]> {
    const querySpec: SqlQuerySpec = {
      query: 'select * from c where c.eventId = @eventId and c.type = @type',
      parameters: [
        {
          name: '@eventId',
          value: eventId,
        },
        {
          name: '@type',
          value: 'trial',
        },
      ],
    }

    const options: FeedOptions = {
      partitionKey: eventId
    }

    const eventTrials = await this.db.queryItems<EventTrialType>(this.containerId, querySpec, options)
    return eventTrials
  }

  async updateEventTrial(trialId: string, eventId: string, eventTrial: UpdateEventTrial): Promise<EventTrialType> {
    const updated = await this.db.updateItem(this.containerId, trialId, eventId, eventTrial)
    return updated
  }
}

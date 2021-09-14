import Database from './db/cosmos'
import { PersonInput, Person as PersonType, CreateNewEventInput, PersonEvent } from '../types'
import { QuerySpec } from '../types/dataSources'

export default class Person {
  db = new Database()
  containerId = 'person'

  async getById(personId: string): Promise<PersonType> {
    const person = await this.db.getItemById<PersonType>(this.containerId, personId, personId)
    return person
  }

  async addNewPerson(personInput: PersonInput): Promise<PersonType> {
    const person: PersonType = { ...personInput } as PersonType
    person.type = 'person'
    const newPerson = await this.db.addItem<PersonType>(this.containerId, person)
    return newPerson
  }

  async addPersonTrial(input: CreateNewEventInput, personId: string, eventId: string): Promise<PersonEvent> {
    const personTrial: PersonEvent = { ...input } as PersonEvent
    personTrial.type = 'event'
    personTrial.personId = personId
    personTrial.eventId = eventId
    personTrial.id = eventId
    personTrial.status = 'New'
    const newPersonTrial = await this.db.addItem<PersonEvent>(this.containerId, personTrial)
    return newPersonTrial
  }

  async getPersonEvents(personId: string): Promise<PersonEvent[]> {
    const querySpec: QuerySpec = {
      query: 'select * from c where c.personId = @personId and c.type = @type',
      parameters: [
        {
          name: '@personId',
          value: personId,
        },
        {
          name: '@type',
          value: 'event',
        },
      ],
    }
    const personTrials = await this.db.queryItems<PersonEvent[]>(this.containerId, querySpec)
    return personTrials
  }

  async getPersonEvent(personId: string, eventId: string): Promise<PersonEvent> {
    const personEvent = await this.db.getItemById<PersonEvent>(this.containerId, eventId, personId)
    return personEvent
  }

  async updatePersonEvent(personId: string, eventId: string, updatedPersonEvent: PersonEvent): Promise<PersonEvent> {
    const personEvent = await this.db.updateItem(this.containerId, eventId, personId, updatedPersonEvent)
    return personEvent
  }
}

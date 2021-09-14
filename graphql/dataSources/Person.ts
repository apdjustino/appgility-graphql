import Database from './db/cosmos'
import { PersonInput, Person as PersonType, CreateNewEventInput, PersonEvent, Dog as DogType } from '../types'
import { QuerySpec } from '../types/dataSources'

export default class Person {
  db = new Database()
  containerId = 'person'

  async getById(personId: string): Promise<PersonType> {
    const person = await this.db.getItemById<PersonType>(this.containerId, personId, personId)
    return person
  }

  async getByEmail(email: string): Promise<PersonType> {
    const querySpec: QuerySpec = {
      query: 'select * from c where c.email = @email and c.type = @type',
      parameters: [
        {
          name: '@email',
          value: email,
        },
        {
          name: '@type',
          value: 'person',
        },
      ],
    }

    const personList = await this.db.queryItems<PersonType[]>(this.containerId, querySpec)
    console.log(personList)
    return personList[0]
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
    const personTrials = await this.db.queryItems<PersonEvent[]>(this.containerId, querySpec, personId)
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

  async getPersonDogs(personId: string): Promise<DogType[]> {
    const querySpec: QuerySpec = {
      query: 'select * from c where c.personId = @personId and c.type = @type',
      parameters: [
        {
          name: '@personId',
          value: personId,
        },
        {
          name: '@type',
          value: 'dog',
        },
      ],
    }
    const dogs = await this.db.queryItems<DogType[]>(this.containerId, querySpec, personId)
    return dogs
  }
}

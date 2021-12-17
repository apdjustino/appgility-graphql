import Database from './db/cosmos'
import { PersonInput, Person as PersonType, CreateNewEventInput, PersonEvent, Dog as DogType, DogInput, PersonRun as RunType, RunInput } from '../types'
import { QuerySpec } from '../types/dataSources'
import { v4 as uuidv4 } from 'uuid'

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
    return personList[0]
  }

  async findPerson(query: string): Promise<PersonType[]> {
    const querySpec: QuerySpec = {
      query: 'select * from c where c.type = @type and (LOWER(c.name) like @query or LOWER(c.email) like @query)',
      parameters: [
        {
          name: '@query',
          value: `%${query.toLowerCase()}%`
        },
        {
          name: '@type',
          value: 'person'
        }
      ]
    }    

    const personList = await this.db.queryItems<PersonType[]>(this.containerId, querySpec);
    return personList;
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
      query: 'select * from c where c.personId = @personId and c.type = @type and c.deleted = false',
      parameters: [
        {
          name: '@personId',
          value: personId,
        },
        {
          name: '@type',
          value: 'dog',
        }
      ],
    }
    const dogs = await this.db.queryItems<DogType[]>(this.containerId, querySpec, personId)
    return dogs
  }

  async addDog(personId: string, dog: DogInput): Promise<DogType> {
    const dogObj = { ...dog } as DogType
    const id = uuidv4()
    
    dogObj.type = 'dog'
    dogObj.personId = personId
    dogObj.id = id
    dogObj.dogId = id
    dogObj.deleted = false

    const newDog = await this.db.addItem(this.containerId, dogObj)
    return newDog
  }

  async updateDog(personId: string, dogId: string, dog: DogInput): Promise<DogType> {
    const dogInput = { ...dog } as DogType
    const dogToUpdate = await this.db.getItemById<DogType>(this.containerId, dogId, personId)

    Object.keys(dogInput).forEach(key => {
      dogToUpdate[key] = dogInput[key]
    })
    const updatedDog = await this.db.updateItem(this.containerId, dogId, personId, dogToUpdate)
    return updatedDog
  }

  async removeDog(personId: string, dogId: string): Promise<DogType> {
    const dogToRemove = await this.db.getItemById<DogType>(this.containerId, dogId, personId)
    dogToRemove.deleted = true
    const updatedDog = await this.db.updateItem(this.containerId, dogId, personId, dogToRemove)
    return updatedDog
  }

  async getDog(dogId: string, personId: string): Promise<DogType> {
    const dog = await this.db.getItemById<DogType>(this.containerId, dogId, personId);
    return dog;
  }

  async addPersonRun(personId: string, dogId: string, runId: string, trialId: string, runInput: RunInput): Promise<RunType> {
    const personRunToAdd: RunType = {} as RunType

    personRunToAdd.personId = personId
    personRunToAdd.dogId = dogId
    personRunToAdd.runId = runId
    personRunToAdd.id = uuidv4()
    personRunToAdd.trialId = trialId
    personRunToAdd.level = runInput.level
    personRunToAdd.agilityClass = runInput.agilityClass
    personRunToAdd.jumpHeight = runInput.jumpHeight
    personRunToAdd.preferred = runInput.preferred
    personRunToAdd.qualified = runInput.qualified
    personRunToAdd.group = runInput.group 
    personRunToAdd.type = 'run'
    personRunToAdd.deleted = false

    const newPersonRun = await this.db.addItem<RunType>(this.containerId, personRunToAdd)
    return newPersonRun

  } 
}

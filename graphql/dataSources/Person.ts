import Database from './db/cosmos'
import { PersonInput, Person as PersonType, CreateNewTrialInput, PersonTrial } from '../types'
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

  async addPersonTrial(input: CreateNewTrialInput, personId: string, trialId: string): Promise<PersonTrial> {    
    const personTrial: PersonTrial = { ...input } as PersonTrial
    personTrial.type = 'trial'
    personTrial.personId = personId
    personTrial.trialId = trialId
    personTrial.status = 'registration'
    const newPersonTrial = await this.db.addItem<PersonTrial>(this.containerId, personTrial)
    return newPersonTrial
  }

  async getPersonTrials(personId: string): Promise<PersonTrial[]> {
    const querySpec: QuerySpec = {
      query: 'select * from c where c.personId = @personId and c.type = @type',
      parameters: [
        {
          name: '@personId',
          value: personId
        },
        {
          name: '@type',
          value: 'trial'
        }
      ]
    }
    const personTrials = await this.db.queryItems<PersonTrial[]>(this.containerId, querySpec)
    return personTrials
  }


}


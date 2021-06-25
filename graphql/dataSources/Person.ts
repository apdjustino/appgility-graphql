import Database from './db/cosmos'
import { PersonInput, Person as PersonType } from '../types'

export default class Person {

  db = new Database()

  async getById(personId: string): Promise<Person> {
    const containerId = 'person'
    const person = await this.db.getItemById<Person>(containerId, personId, personId)
    return person
  }

  async addNewPerson(personInput: PersonInput): Promise<PersonType> {
    const containerId = 'person'
    const person: PersonType = { ...personInput } as PersonType
    person.type = 'person'
    const newPerson = await this.db.addItem<PersonType>(containerId, person)
    return newPerson
  }


}


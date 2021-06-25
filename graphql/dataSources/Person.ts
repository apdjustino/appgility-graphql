import Database from './db/cosmos'
import { PersonInput } from '../types'

export default class Person {

  db = new Database()

  async getById(personId: string): Promise<Person> {
    const containerId = 'person'
    const person = await this.db.getItemById<Person>(containerId, personId, personId)
    return person
  }

  async addNewPerson(personInput: PersonInput): Promise<Person> {
    const containerId = 'person'
    const person: Person = { ...personInput } as Person
    const newPerson = await this.db.addItem<Person>(containerId, person)
    return newPerson
  }


}


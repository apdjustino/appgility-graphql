import Database from './db/cosmos'

export default class Person {

  db = new Database()

  async getById(personId: string) {
    const containerId = 'person'
    const person = await this.db.getItemById(containerId, personId, personId)
    return person
  }


}


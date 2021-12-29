import Database from './db/cosmos'
import { v4 as uuidv4 } from 'uuid'
import { Dog, Person, RunInput, ScheduleRun as RunType } from '../types'

export default class Schedule {
  db = new Database()
  containerId = 'schedule'

  async addScheduleRun(runId: string, person: Person, dog: Dog, trialId: string, runInput: RunInput, createdAt: string): Promise<RunType> {
    const scheduleRunToAdd: RunType = {} as RunType

    scheduleRunToAdd.runId = runId
    scheduleRunToAdd.id = uuidv4()
    scheduleRunToAdd.personId = person.personId
    scheduleRunToAdd.personName = person.name
    scheduleRunToAdd.dogId = dog.dogId
    scheduleRunToAdd.callName = dog.callName
    scheduleRunToAdd.trialId = trialId
    scheduleRunToAdd.level = runInput.level
    scheduleRunToAdd.agilityClass = runInput.agilityClass
    scheduleRunToAdd.jumpHeight = runInput.jumpHeight
    scheduleRunToAdd.parent = null
    scheduleRunToAdd.preferred = runInput.preferred
    scheduleRunToAdd.type = 'run'
    scheduleRunToAdd.group = runInput.group
    scheduleRunToAdd.createdAt = createdAt
    
    const newScheduleRun = await this.db.addItem<RunType>(this.containerId, scheduleRunToAdd)
    return newScheduleRun
  }
}
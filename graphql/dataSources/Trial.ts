import Database from './db/cosmos'
import { AddTrial, Trial as TrialType, UpdateTrial, RunInput, Run as RunType, Person, Dog, AgilityClass, AgilityAbility } from '../types'
import { v4 as uuidv4 } from 'uuid'
import { FeedOptions, FeedResponse, SqlParameter, SqlQuerySpec } from '@azure/cosmos'
import { RunCount } from '../types/dataSources'

export default class Trial {
  db = new Database()
  containerId = 'trial'

  async getTrial(trialId: string): Promise<TrialType> {
    const trial = await this.db.getItemById<TrialType>(this.containerId, trialId, trialId)
    return trial
  }

  async addTrial(trialId: string, trialInput: AddTrial): Promise<TrialType> {
    const trial: TrialType = { ...trialInput } as TrialType

    trial.type = 'trial'
    trial.id = trialId
    trial.trialId = trialId
    const newTrial = await this.db.addItem<TrialType>(this.containerId, trial)
    return newTrial
  }

  async updateTrial(trialId: string, updatedTrial: UpdateTrial): Promise<TrialType> {
    const updated = this.db.updateItem(this.containerId, trialId, trialId, updatedTrial)
    return updated
  }

  async addTrialRun(runId: string, person: Person, dog: Dog, trialId: string, runInput: RunInput, createdAt: string): Promise<RunType> {
    const trialRun: RunType = { ...runInput } as RunType

    trialRun.type = 'run'
    trialRun.id = runId
    trialRun.runId = runId
    trialRun.personId = person.personId
    trialRun.personName = person.name
    trialRun.callName = dog.callName
    trialRun.dogId = dog.dogId
    trialRun.trialId = trialId
    trialRun.deleted = false
    trialRun.createdAt = createdAt

    const newTrialRun = await this.db.addItem<RunType>(this.containerId, trialRun)
    return newTrialRun
  }

  async getTrialRuns(trialId: string): Promise<RunType[]> {
    const querySpec: SqlQuerySpec = {
      query: 'select * from c where c.trialId = @trialId and c.type = @type and c.deleted = false',
      parameters: [
        { name: '@trialId', value: trialId },
        { name: '@type', value: 'run'}
      ]
    }

    const options: FeedOptions = {
      partitionKey: trialId
    }

    const trialRuns = await this.db.queryItems<RunType>(this.containerId, querySpec, options)
    return trialRuns
  }

  async getTrialRunCount(trialId: string): Promise<RunCount> {
    
    const querySpec: SqlQuerySpec = {
      query: 'select count(c.runId) as runCount from c where c.trialId = @trialId and c.type = @type and c.deleted = false',
      parameters: [
        { name: '@trialId', value: trialId },
        { name: '@type', value: 'run'}
      ]
    }

    const options: FeedOptions = {
      partitionKey: trialId
    }

    const runCount = await this.db.queryItems<RunCount>(this.containerId, querySpec, options);
    return runCount[0];


  }

  async getTrialRunsPaginated(trialId: string, agilityClass?: AgilityClass[], level?: AgilityAbility[], jumpHeight?: number[], preferred?: boolean, regular?: boolean, search?: string, continuationToken?: string): Promise<FeedResponse<RunType>> {
    
    let query: string = "select * from c where c.trialId = @trialId and c.type = @type and c.deleted = false"
    const parameters: SqlParameter[] = [
      { name: '@trialId', value: trialId },
      { name: '@type', value: 'run'}
    ]

    if (!!agilityClass) {
      query = `${query} and ARRAY_CONTAINS(@agilityClass, c.agilityClass)`
      parameters.push({
        name: "@agilityClass", value: agilityClass
      })
    }

    if (!!level) {
      query = `${query} and ARRAY_CONTAINS(@level, c.level)`
      parameters.push({
        name: "@level", value: level
      })
    }

    if (!!jumpHeight) {
      query = `${query} and ARRAY_CONTAINS(@jumpHeight, c.jumpHeight)`
      parameters.push({
        name: "@jumpHeight", value: jumpHeight
      })
    }

    if (!!preferred) {
      query = `${query} and c.preferred = true`      
    }

    if (!!regular) {
      query = `${query} and c.preferred = false`      
    }

    if (!!search) {
      query = `${query} and (LOWER(c.personName) like @search or LOWER(c.callName) like @search)`,
      parameters.push({
        name: "@search", value: `%${search}%`
      })
    }
    
    query = `${query} ORDER BY c.createdAt DESC`
    
    const querySpec: SqlQuerySpec = {
      query,
      parameters
    }

    const options: FeedOptions = !!continuationToken ? {
      partitionKey: trialId,
      maxItemCount: 25,
      continuationToken
    } : {
      partitionKey: trialId,
      maxItemCount: 25
    }

    const response = await this.db.queryPaginatedItems<RunType>(this.containerId, querySpec, options)        
    return response
    
  }

  async getTrialRun(trialId: string, runId: string): Promise<RunType> {
    const trialRun = await this.db.getItemById<RunType>(this.containerId, runId, trialId);
    return trialRun
  }

  async updateTrialRun(trialId: string, runId: string, run: RunType): Promise<RunType> {    
    const updatedRun = await this.db.updateItem<RunType>(this.containerId, runId, trialId, run);
    return updatedRun
  }

  async deleteTrialRun(trialId: string, runId: string): Promise<RunType> {    
    const deletedRun = await this.db.deleteItem<RunType>(this.containerId, runId, trialId);
    return deletedRun;
  }
}

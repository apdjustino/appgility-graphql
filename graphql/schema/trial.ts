import { ValidationRules, verify } from '../dataSources/utils'
import { QueryGetTrialArgs, MutationAddRunArgs, QueryGetTrialRunsArgs, RunView, Run, QueryGetTrialRunsPaginatedArgs, PaginatedRunResponse } from '../types'
import { DataSources } from '../types/dataSources'
import { v4 as uuid } from 'uuid'

const { gql } = require('apollo-server-azure-functions')

const typeDef = gql`
  input AddTrial {
    eventId: String!
    akcTrialNumber: String
    trialDate: String
  }

  input UpdateTrial {
    id: String!
    trialId: String!
    eventId: String!
    type: String!
    akcTrialNumber: String
    trialDate: String
  }

  enum AgilityClass {
    STANDARD
    JUMPERS
    FAST
    T2B
    PREMIER_STANDARD
    PREMIER_JUMPERS
  }

  enum AgilityAbility {
    NOVICE
    OPEN
    EXCELLENT
    MASTERS
  }

  type Trial {
    id: String!
    trialId: String!
    eventId: String!
    type: String!
    akcTrialNumber: String
    trialDate: String
  }

  type Run {
    id: String!
    type: String!
    runId: String!
    trialId: String!
    personId: String!
    personName: String!
    dogId: String!
    callName: String!
    agilityClass: AgilityClass!
    level: AgilityAbility
    preferred: Boolean!
    jumpHeight: Int!
    group: String
    armband: String
    courseLength: Int
    score: Int
    timeDeduction: Int
    time: Float
    qualified: Boolean
    points: Int
    sendBonus: Boolean
    wrongCourse: Int
    excusal: Int
    refusal: Int
    failure: Int
    table: Int
    rank: Int
    obstacles: [Boolean]
    paid: Boolean
    deleted: Boolean!
  }

  input RunInput {
    agilityClass: AgilityClass!
    level: AgilityAbility
    preferred: Boolean!
    jumpHeight: Int!
    group: String
    armband: String
    courseLength: Int
    score: Int
    timeDeduction: Float
    time: Float
    qualified: Boolean
    points: Int
    sendBonus: Boolean
    wrongCourse: Int
    excusal: Int
    refusal: Int
    failure: Int
    table: Int
    rank: Int
    obstacles: [Boolean]
    paid: Boolean
  }

  type RunView {
    id: String!
    type: String!
    runId: String!
    trialId: String!
    person: Person
    dog: Dog
    agilityClass: AgilityClass!
    level: AgilityAbility
    preferred: Boolean!
    jumpHeight: Int!
    group: String
    armband: String
    courseLength: Int
    score: Int
    timeDeduction: Int
    time: Float
    qualified: Boolean
    points: Int
    sendBonus: Boolean
    wrongCourse: Int
    excusal: Int
    refusal: Int
    failure: Int
    table: Int
    rank: Int
    obstacles: [Boolean]
    paid: Boolean
    deleted: Boolean!
  }

  type PaginatedRunResponse {
    runs: [Run]
    hasMoreResults: Boolean
    continuationToken: String
  }

  extend type Query {
    getTrial(trialId: String!): Trial
    getTrialRuns(trialId: String!): [Run]
    getTrialRunsPaginated(trialId: String!, agilityClass: [AgilityClass], level: [AgilityAbility], jumpHeight: [Int], preferred: Boolean, regular: Boolean, search: String, continuationToken: String): PaginatedRunResponse
  }

  extend type Mutation {
    addRun(eventId: String!, trialId: String!, personId: String!, dogId: String!, run: RunInput!): Run
  }
`

const resolvers = {
  Query: {
    getTrial: async (_, args: QueryGetTrialArgs, { dataSources, token }: { dataSources: DataSources; token: string }, __) => {
      const rules: ValidationRules = {
        allowedRoles: ['secretary', 'exhibitor'],
      }

      await verify(token, rules)

      const { trial } = dataSources
      const result = await trial.getTrial(args.trialId)
      return result
    },
    getTrialRuns: async (_, args: QueryGetTrialRunsArgs, { dataSources, token } : { dataSources: DataSources, token: string }, __): Promise<Run[]> => {
      const rules: ValidationRules = {
        allowedRoles: ['secretary', 'exhibitor']
      }

      await verify(token, rules)

      const { trial } = dataSources
      const runs = await trial.getTrialRuns(args.trialId)
      return runs      
    },
    getTrialRunsPaginated: async (_, args: QueryGetTrialRunsPaginatedArgs, { dataSources, token }: { dataSources: DataSources, token: string }, __): Promise<PaginatedRunResponse>  => {
      const rules: ValidationRules = {
        allowedRoles: ['secretary', 'exhibitor']
      }

      await verify(token, rules)
      
      const { trial } = dataSources
      
      const { resources, continuationToken, hasMoreResults } = await trial.getTrialRunsPaginated(args.trialId, args.agilityClass, args.level, args.jumpHeight, args.preferred, args.regular, args.search, args.continuationToken)
      const response: PaginatedRunResponse = {
        runs: resources,
        continuationToken,
        hasMoreResults
      }

      return response

    }
  },
  Mutation: {
    addRun: async (_, args: MutationAddRunArgs, { dataSources, token } : { dataSources: DataSources, token: string }, __): Promise<Run> => {
      const rules: ValidationRules = {
        allowedRoles: ['secretary'],
        eventId: args.eventId
      }

      await verify(token, rules)

      const { trial, person, schedule } = dataSources
      const { personId, dogId, trialId, run } = args 
      const runId = uuid()

      const personRecord = await person.getById(personId);
      const dogRecord = await person.getDog(dogId, personId);

      const trialRun = await trial.addTrialRun(runId, personRecord, dogRecord, trialId, run)
      await person.addPersonRun(personRecord, dogRecord, runId, trialId, run)
      await schedule.addScheduleRun(runId, personRecord, dogRecord, trialId, run)

      return trialRun
    }
  }
}

exports.TrialSchema = typeDef
exports.trialResolvers = resolvers

import { ValidationRules, verify } from '../dataSources/utils'
import { QueryGetTrialArgs, MutationAddRunArgs, QueryGetTrialRunsArgs, RunView } from '../types'
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
    dogId: String!
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
    person: Person!
    dog: Dog!
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

  extend type Query {
    getTrial(trialId: String!): Trial
    getTrialRuns(trialId: String!): [RunView]
  }

  extend type Mutation {
    addRun(eventId: String!, trialId: String!, personId: String!, dogId: String!, run: RunInput!): RunView
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
    getTrialRuns: async (_, args: QueryGetTrialRunsArgs, { dataSources, token } : { dataSources: DataSources, token: string }, __): Promise<RunView[]> => {
      const rules: ValidationRules = {
        allowedRoles: ['secretary', 'exhibitor']
      }

      await verify(token, rules)

      const { trial, person } = dataSources
      const runs = await trial.getTrialRuns(args.trialId)
      const result: RunView[] = await Promise.all(runs.map(async (trialRun) => {
        const personRecord = await person.getById(trialRun.personId);
        const dogRecord = await person.getDog(trialRun.dogId, trialRun.personId);
        return {
          id: trialRun.id,
          type: trialRun.type,
          runId: trialRun.runId,
          trialId: trialRun.trialId,
          person: personRecord,
          dog: dogRecord,
          agilityClass: trialRun.agilityClass,
          level: trialRun.level,
          preferred: trialRun.preferred,
          jumpHeight: trialRun.jumpHeight,
          group: trialRun.group,
          armband: trialRun.armband,
          courseLength: trialRun.courseLength,
          score: trialRun.score,
          timeDeduction: trialRun.timeDeduction,
          time: trialRun.time,
          qualified: trialRun.qualified,
          points: trialRun.points,
          sendBonus: trialRun.sendBonus,
          wrongCourse: trialRun.wrongCourse,
          excusal: trialRun.excusal,
          refusal: trialRun.refusal,
          failure: trialRun.failure,
          table: trialRun.table,
          rank: trialRun.rank,
          obstacles: trialRun.obstacles,
          paid: trialRun.paid,
          deleted: trialRun.deleted
        }
      }))
      return result;
    }
  },
  Mutation: {
    addRun: async (_, args: MutationAddRunArgs, { dataSources, token } : { dataSources: DataSources, token: string }, __): Promise<RunView> => {
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

      const trialRun = await trial.addTrialRun(runId, personId, dogId, trialId, run)
      await person.addPersonRun(args.personId, dogId, runId, trialId, run)
      await schedule.addScheduleRun(runId, personId, dogId, trialId, run)

      return {
        id: trialRun.id,
        type: trialRun.type,
        runId: trialRun.runId,
        trialId: trialRun.trialId,
        person: personRecord,
        dog: dogRecord,
        agilityClass: trialRun.agilityClass,
        level: trialRun.level,
        preferred: trialRun.preferred,
        jumpHeight: trialRun.jumpHeight,
        group: trialRun.group,
        armband: trialRun.armband,
        courseLength: trialRun.courseLength,
        score: trialRun.score,
        timeDeduction: trialRun.timeDeduction,
        time: trialRun.time,
        qualified: trialRun.qualified,
        points: trialRun.points,
        sendBonus: trialRun.sendBonus,
        wrongCourse: trialRun.wrongCourse,
        excusal: trialRun.excusal,
        refusal: trialRun.refusal,
        failure: trialRun.failure,
        table: trialRun.table,
        rank: trialRun.rank,
        obstacles: trialRun.obstacles,
        paid: trialRun.paid,
        deleted: trialRun.deleted

      }
    }
  }
}

exports.TrialSchema = typeDef
exports.trialResolvers = resolvers

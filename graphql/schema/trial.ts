import { ValidationRules, verify } from '../dataSources/utils'
import { QueryGetTrialArgs } from '../types'
import { DataSources } from '../types/dataSources'

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
    PREMIER
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
    class: AgilityClass!
    ability: AgilityAbility!
    preferred: Boolean!
    jumpHeight: Int!
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
    paid: Boolean!
  }

  input RunInput {
    class: AgilityClass
    ability: AgilityAbility
    preferred: Boolean
    jumpHeight: Int
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

  extend type Query {
    getTrial(trialId: String!): Trial
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
      const result = trial.getTrial(args.trialId)
      return result
    },
  },
}

exports.TrialSchema = typeDef
exports.trialResolvers = resolvers

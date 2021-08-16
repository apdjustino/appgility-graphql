import { ValidationRules, verify } from "../dataSources/utils"
import { QueryGetTrialArgs } from "../types"
import { DataSources } from "../types/dataSources"

const { gql } = require('apollo-server-azure-functions')

const typeDef = gql`
  input AddTrial {
    eventId: String!,    
    akcTrialNumber: String,
    trialDate: String
  }

  input UpdateTrial {
    id: String!,
    trialId: String!,
    eventId: String!,
    type: String!,
    akcTrialNumber: String,
    trialDate: String
  }

  type Trial {
    id: String!,
    trialId: String!,
    eventId: String!,
    type: String!,
    akcTrialNumber: String,
    trialDate: String
  }

  extend type Query {
    getTrial(trialId: String!): Trial
  }
`

const resolvers = {  
  Query: {
    getTrial: async (_, args: QueryGetTrialArgs, { dataSources, token } : { dataSources: DataSources, token: string }, __) => {
      const rules: ValidationRules = {
        allowedRoles: ['secretary', 'exhibitor']
      }

      await verify(token, rules)
      
      const { trial } = dataSources
      const result = trial.getTrial(args.trialId)
      return result
    }
  }
}

exports.TrialSchema = typeDef
exports.trialResolvers = resolvers
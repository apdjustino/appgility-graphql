
import { ValidationRules, verify } from "../dataSources/utils"
import { MutationAddTrialArgs } from "../types"
import { DataSources } from "../types/dataSources"

const { gql } = require('apollo-server-azure-functions')

const typeDef = gql`
  input CreateNewTrialInput {            
    name: String!,
    startDate: String!,
    endDate: String!,
    locationCity: String!,
    locationState: String!,    
    locationVenue: String,   
    hostClub: String,
  }

  type Trial {    
    trialId: String!,
    type: String!,
    name: String!,
    startDate: String!,
    endDate: String!,
    locationCity: String!,
    locationState: String!,
    status: String!,
    locationVenue: String
    hostClub: String,
    price: Int,
    onlineEntryLimit: Int,
    mailEntryLimit: Int,
    premiumLink: String,
    allowedClasses: [String],
    judges: [String]
  }

  extend type Mutation {
    addTrial(data: CreateNewTrialInput, personId: String): Trial
  }
`

const resolvers = {
  Mutation: {
    addTrial: async (_, args: MutationAddTrialArgs, { dataSources, token }: { dataSources: DataSources, token: string}, __) => {
      const rules: ValidationRules = {
        allowedRoles: ['secretary'],
        personId: args.personId
      }
      await verify(token, rules)
      const { trial, person } = dataSources
      const result = await trial.addTrial(args.data)
      const ___ = await person.addPersonTrial(args.data, args.personId, result.trialId)
      return result
    }
  }
}

exports.Trial = typeDef
exports.trialResolvers = resolvers
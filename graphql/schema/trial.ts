
import { MutationAddTrialArgs } from "../types"
import { DataSources } from "../types/dataSources"

const { gql } = require('apollo-server-azure-functions')

const typeDef = gql`
  input CreateNewTrialInput {            
    name: String!,
    startDate: String!,
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
    addTrial(data: CreateNewTrialInput): Trial
  }
`

const resolvers = {
  Mutation: {
    addTrial: async (_, args: MutationAddTrialArgs, { dataSources }: { dataSources: DataSources }, __) => {
      const { trial } = dataSources
      const result = await trial.addTrial(args.data)
      return result
    }
  }
}

exports.Trial = typeDef
exports.trialResolvers = resolvers
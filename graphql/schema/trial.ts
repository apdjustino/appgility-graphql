
import { ValidationRules, verify } from "../dataSources/utils"
import { MutationAddEventArgs } from "../types"
import { DataSources } from "../types/dataSources"

const { gql } = require('apollo-server-azure-functions')

const typeDef = gql`
  input CreateNewEventInput {            
    name: String!,    
    locationCity: String!,
    locationState: String!,    
    trialSite: String,   
    hostClub: String,
  }

  type Event {
    eventId: String!,
    type: String!,
    name: String!,    
    locationCity: String!,
    locationState: String!,
    status: String!,
    trialSite: String
    hostClub: String,
    price: Int,
    altPrice: Int,
    premiumLink: String
  }

  extend type Mutation {
    addEvent(data: CreateNewEventInput, personId: String): Event
  }
`

const resolvers = {
  Mutation: {
    addEvent: async (_, args: MutationAddEventArgs, { dataSources, token }: { dataSources: DataSources, token: string}, __) => {
      const rules: ValidationRules = {
        allowedRoles: ['secretary'],
        personId: args.personId
      }
      await verify(token, rules)
      const { event, person } = dataSources
      const result = await event.addEvent(args.data)
      const ___ = await person.addPersonTrial(args.data, args.personId, result.eventId)
      return result
    }
  }
}

exports.Trial = typeDef
exports.trialResolvers = resolvers
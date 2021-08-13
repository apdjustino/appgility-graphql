
import { ValidationRules, verify } from "../dataSources/utils"
import { MutationAddEventArgs, MutationUpdateEventArgs, QueryGetEventArgs } from "../types"
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

  input UpdateEventInput {
    id: String!,
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
    premiumLink: String,
    registrationEnabled: Boolean,
    registrationCutoff: String 
  }

  type Event {
    id: String!,
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
    premiumLink: String,
    registrationEnabled: Boolean,
    registrationCutoff: String    
  }

  extend type Query {
    getEvent(eventId: String!): Event
  }

  extend type Mutation {
    addEvent(data: CreateNewEventInput, personId: String): Event,
    updateEvent(eventId: String!, updatedEvent: UpdateEventInput!): Event
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
    },
    updateEvent: async (_, args: MutationUpdateEventArgs, { dataSources, token } : { dataSources: DataSources, token: string, __}) => {
      const rules: ValidationRules = {
        allowedRoles: ['secretary']
      }
      await verify(token, rules)
      const { event } = dataSources
      const result = await event.updateEvent(args.eventId, args.updatedEvent)
      return result
    }
  },
  Query: {
    getEvent: async (_, args: QueryGetEventArgs, { dataSources, token }: { dataSources: DataSources, token: string}, __) => {
      const rules: ValidationRules = {
        allowedRoles: ['exhibitor', 'secretary']
      }

      await verify(token, rules)
      const { event } = dataSources
      const result = await event.getEvent(args.eventId)
      return result
    }
  }  
}

exports.Trial = typeDef
exports.trialResolvers = resolvers
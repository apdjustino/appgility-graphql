
import { ValidationRules, verify } from "../dataSources/utils"
import { AddTrial, MutationAddEventArgs, MutationAddEventTrialArgs, MutationUpdateEventArgs, MutationUpdateEventTrialArgs, PersonEvent, QueryGetEventArgs, QueryGetEventTrialArgs, QueryGetEventTrialsArgs, UpdateTrial } from "../types"
import { DataSources } from "../types/dataSources"
import { v4 as uuidv4 } from 'uuid';

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

  input AddEventTrial {    
    eventId: String!,
    akcTrialNumber: String,
    trialDate: String,
    onlineEntries: Int,
    mailEntries: Int,
    standardClass: Boolean,
    standardAbility: [String],
    standardPreferred: [String],
    jumpersClass: Boolean,
    jumpersAbility: [String],
    jumpersPreferred: [String],
    fastClass: Boolean,
    fastAbility: [String],
    fastPreferred: [String],
    t2bClass: Boolean,
    premierStandard: Boolean,
    premierJumpers: Boolean
  }

  input UpdateEventTrial {
    id: String!,
    trialId: String!,
    eventId: String!,
    type: String!,
    akcTrialNumber: String,
    trialDate: String,
    onlineEntries: Int,
    mailEntries: Int,
    standardClass: Boolean,
    standardAbility: [String],
    standardPreferred: [String],
    jumpersClass: Boolean,
    jumpersAbility: [String],
    jumpersPreferred: [String],
    fastClass: Boolean,
    fastAbility: [String],
    fastPreferred: [String],
    t2bClass: Boolean,
    premierStandard: Boolean,
    premierJumpers: Boolean
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

  type EventTrial {
    id: String!,
    trialId: String!,
    eventId: String!,
    type: String!,
    akcTrialNumber: String,
    trialDate: String,
    onlineEntries: Int,
    mailEntries: Int,
    standardClass: Boolean,
    standardAbility: [String],
    standardPreferred: [String],
    jumpersClass: Boolean,
    jumpersAbility: [String],
    jumpersPreferred: [String],
    fastClass: Boolean,
    fastAbility: [String],
    fastPreferred: [String],
    t2bClass: Boolean,
    premierStandard: Boolean,
    premierJumpers: Boolean
  }

  extend type Query {
    getEvent(eventId: String!): Event,
    getEventTrials(eventId: String!): [EventTrial],
    getEventTrial(trialId: String!, eventId: String!): EventTrial
  }

  extend type Mutation {
    addEvent(data: CreateNewEventInput, personId: String): Event,
    updateEvent(eventId: String!, updatedEvent: UpdateEventInput!, personId: String!): Event,
    addEventTrial(eventTrial: AddEventTrial!): EventTrial,
    updateEventTrial(trialId: String!, eventId: String!, eventTrial: UpdateEventTrial!): EventTrial
  }
`

const resolvers = {
  Mutation: {
    addEvent: async (_, args: MutationAddEventArgs, { dataSources, token }: { dataSources: DataSources, token: string}, __) => {
      const rules: ValidationRules = {
        allowedRoles: ['secretary']        
      }
      await verify(token, rules)
      const { event, person } = dataSources
      const result = await event.addEvent(args.data)
      const ___ = await person.addPersonTrial(args.data, args.personId, result.eventId)
      return result
    },
    updateEvent: async (_, args: MutationUpdateEventArgs, { dataSources, token } : { dataSources: DataSources, token: string, __}) => {
      const rules: ValidationRules = {
        allowedRoles: ['secretary'],
        eventId: args.eventId
      }
      await verify(token, rules)
      const { event, person } = dataSources

      const personEvent: PersonEvent = await person.getPersonEvent(args.personId, args.eventId)
      personEvent.name = args.updatedEvent.name
      personEvent.locationCity = args.updatedEvent.locationCity
      personEvent.locationState = args.updatedEvent.locationState
      personEvent.status = args.updatedEvent.status
      personEvent.trialSite = args.updatedEvent.trialSite
      
      const result = await event.updateEvent(args.eventId, args.updatedEvent)
      const ___ = await person.updatePersonEvent(args.personId, args.eventId, personEvent)
      return result
    },
    addEventTrial: async (_, args: MutationAddEventTrialArgs, { dataSources, token } : { dataSources: DataSources, token: string, __ }) => {
      const rules: ValidationRules = {
        allowedRoles: ['secretary'],
        eventId: args.eventTrial.eventId
      }

      await verify(token, rules)
      const { event, trial } = dataSources
      const trialId = uuidv4()
      const result = await event.addEventTrial(trialId, args.eventTrial)
      
      const addTrialInput: AddTrial = {
        akcTrialNumber: args.eventTrial.akcTrialNumber,
        eventId: args.eventTrial.eventId,
        trialDate: args.eventTrial.trialDate
      }
      const ___ = await trial.addTrial(trialId, addTrialInput)
      return result
    },
    updateEventTrial: async (_, args: MutationUpdateEventTrialArgs, { dataSources, token } : { dataSources: DataSources, token: string, __ }) => {
      const rules: ValidationRules = {
        allowedRoles: ['secretary'],
        eventId: args.eventId
      }

      await verify(token, rules)
      const { event, trial } = dataSources

      const updateTrialInput: UpdateTrial = {
        id: args.trialId,
        trialId: args.trialId,
        eventId: args.eventId,
        type: 'trial',
        akcTrialNumber: args.eventTrial.akcTrialNumber,
        trialDate: args.eventTrial.trialDate
      }

      const result = await event.updateEventTrial(args.trialId, args.eventId, args.eventTrial)
      const ___ = await trial.updateTrial(args.trialId, updateTrialInput)
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
    },
    getEventTrials: async (_, args: QueryGetEventTrialsArgs, { dataSources, token }: {dataSources: DataSources, token: string }, __) => {
      const rules: ValidationRules = {
        allowedRoles: ['exhibitor', 'secretary']
      }
      
      await verify(token, rules)
      const { event } = dataSources
      const result = await event.getEventTrials(args.eventId)
      return result
    },
    getEventTrial: async (_, args: QueryGetEventTrialArgs, { dataSources, token }: { dataSources: DataSources, token: string }, __) => {
      const rules: ValidationRules = {
        allowedRoles: ['exhibitor', 'secretary']
      }

      await verify(token, rules)
      const { event } = dataSources
      const result = await event.getEventTrial(args.trialId, args.eventId)
      return result
    }
  }  
}

exports.Trial = typeDef
exports.eventResolvers = resolvers
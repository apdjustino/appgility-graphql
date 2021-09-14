import { ValidationRules, verify } from '../dataSources/utils'
import { MutationAddPersonArgs, QueryGetPersonByEmailArgs, QueryGetPersonByIdArgs, QueryGetPersonEventArgs, QueryGetPersonEventsArgs } from '../types'
import { DataSources } from '../types/dataSources'

const { gql } = require('apollo-server-azure-functions')

const typeDef = gql`
  input PersonInput {
    id: String
    personId: String
    name: String
    email: String
    role: String
  }

  input PersonEventInput {
    id: String!
    eventId: String!
    personId: String!
    type: String!
    name: String!
    locationCity: String!
    locationState: String!
    status: String!
    trialSite: String
  }

  type Person {
    id: String
    type: String
    personId: String
    name: String
    email: String
    role: String
  }

  type PersonEvent {
    id: String!
    eventId: String!
    personId: String!
    type: String!
    name: String!
    locationCity: String!
    locationState: String!
    status: String!
    trialSite: String
  }

  extend type Query {
    getPersonById(personId: String!): Person
    getPersonEvents(personId: String!): [PersonEvent]
    getPersonEvent(personId: String!, eventId: String!): PersonEvent
    getPersonByEmail(email: String!): Person
  }

  extend type Mutation {
    addPerson(data: PersonInput): Person
  }
`

const resolvers = {
  Query: {
    getPersonById: async (_, args: QueryGetPersonByIdArgs, { dataSources, token }: { dataSources: DataSources; token: string }, __) => {
      const rules: ValidationRules = {
        allowedRoles: ['secretary, exhibitor'],
      }
      await verify(token, rules)
      const { person } = dataSources
      const { personId } = args
      const result = await person.getById(personId)
      return result
    },
    getPersonEvents: async (_, args: QueryGetPersonEventsArgs, { dataSources, token }: { dataSources: DataSources; token: string }, __) => {
      const rules: ValidationRules = {
        allowedRoles: ['secretary', 'exhibitor'],
      }
      await verify(token, rules)
      const { person } = dataSources
      const { personId } = args
      const result = await person.getPersonEvents(personId)
      return result
    },
    getPersonEvent: async (_, args: QueryGetPersonEventArgs, { dataSources, token }: { dataSources: DataSources; token: string }, __) => {
      const rules: ValidationRules = {
        allowedRoles: ['secretary', 'exhibitor'],
      }
      await verify(token, rules)
      const { person } = dataSources
      const { personId, eventId } = args
      const result = await person.getPersonEvent(personId, eventId)
      return result
    },
    getPersonByEmail: async (_, args: QueryGetPersonByEmailArgs, { dataSources, token }: { dataSources: DataSources; token: string }, __) => {
      const { person } = dataSources
      const { email } = args
      const result = await person.getByEmail(email)
      return result
    },
  },
  Mutation: {
    addPerson: async (_, args: MutationAddPersonArgs, { dataSources }: { dataSources: DataSources }, __) => {
      const { person } = dataSources
      const result = await person.addNewPerson(args.data)
      return result
    },
  },
}

exports.Person = typeDef
exports.personResolvers = resolvers

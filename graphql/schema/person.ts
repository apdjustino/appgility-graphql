import { ValidationRules, verify } from '../dataSources/utils'
import {
  MutationAddDogArgs,
  MutationAddPersonArgs,
  MutationRemoveDogArgs,
  MutationUpdateDogArgs,
  QueryGetPersonByEmailArgs,
  QueryGetPersonByIdArgs,
  QueryGetPersonDogsArgs,
  QueryGetPersonEventArgs,
  QueryGetPersonEventsArgs,
} from '../types'
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

  enum Sex {
    MALE
    FEMALE
  }

  type Dog {
    id: String!
    dogId: String!
    personId: String!
    type: String!
    callName: String!
    akcNumber: String
    akcName: String
    akcPrefix: String
    akcSuffix: String
    breed: String
    dob: String
    jumpHeight: Int
    sex: Sex
    deleted: Boolean
  }

  input DogInput {
    callName: String!
    akcNumber: String
    akcName: String
    akcPrefix: String
    akcSuffix: String
    breed: String
    dob: String
    jumpHeight: Int
    sex: Sex
    deleted: Boolean
  }

  extend type Query {
    getPersonById(personId: String!): Person
    getPersonEvents(personId: String!): [PersonEvent]
    getPersonEvent(personId: String!, eventId: String!): PersonEvent
    getPersonByEmail(email: String!): Person
    getPersonDogs(personId: String!): [Dog]
  }

  extend type Mutation {
    addPerson(data: PersonInput): Person
    addDog(personId: String!, dog: DogInput!): Dog
    updateDog(personId: String!, dogId: String!, dog: DogInput!): Dog
    removeDog(personId: String!, dogId: String!): Dog
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
    getPersonByEmail: async (_, args: QueryGetPersonByEmailArgs, { dataSources }: { dataSources: DataSources; token: string }, __) => {
      const { person } = dataSources
      const { email } = args
      const result = await person.getByEmail(email)
      return result
    },
    getPersonDogs: async (_, args: QueryGetPersonDogsArgs, { dataSources, token }: { dataSources: DataSources; token: string }, __) => {
      const rules: ValidationRules = {
        allowedRoles: ['secretary', 'exhibitor'],
      }
      await verify(token, rules)
      const { person } = dataSources
      const { personId } = args
      const result = person.getPersonDogs(personId)
      return result
    },
  },
  Mutation: {
    addPerson: async (_, args: MutationAddPersonArgs, { dataSources }: { dataSources: DataSources }, __) => {
      const { person } = dataSources
      const result = await person.addNewPerson(args.data)
      return result
    },
    addDog: async (_, args: MutationAddDogArgs, { dataSources, token }: { dataSources: DataSources, token: string}, __) => {
      const rules: ValidationRules = {
        allowedRoles: ['secretary', 'exhibitor'],
        personId: args.personId
      }
      await verify(token, rules)

      const { person } = dataSources
      const result = await person.addDog(args.personId, args.dog)
      return result
    },
    updateDog: async (_, args: MutationUpdateDogArgs, { dataSources, token }: { dataSources: DataSources, token: string}, __) => {
      const rules: ValidationRules = {
        allowedRoles: ['secretary', 'exhibitor'],
        personId: args.personId
      }
      await verify(token, rules)

      const { person } = dataSources
      const result = await person.updateDog(args.personId, args.dogId, args.dog)
      return result
    },
    removeDog: async (_, args: MutationRemoveDogArgs, { dataSources, token }: { dataSources: DataSources, token: string}, __) => {
      const rules: ValidationRules = {
        allowedRoles: ['secretary', 'exhibitor'],
        personId: args.personId
      }
      await verify(token, rules)

      const { person } = dataSources
      const result = await person.removeDog(args.personId, args.dogId)
      return result
    }
  },
}

exports.Person = typeDef
exports.personResolvers = resolvers

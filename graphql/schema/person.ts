import { MutationAddPersonArgs, MutationAddPersonTrialArgs, QueryGetPersonByIdArgs, QueryGetPersonTrialsArgs } from "../types"
import { DataSources } from "../types/dataSources"

const { gql } = require('apollo-server-azure-functions')

const typeDef = gql`
  input PersonInput {
    id: String,
    personId: String,
    name: String
    email: String
    role: String
  }

  type Person {
    id: String,
    type: String,
    personId: String
    name: String
    email: String
    role: String
  }

  type PersonTrial {    
    trialId: String!,
    personId: String!,
    type: String!,
    name: String!,
    startDate: String!,
    endDate: String!,
    locationCity: String!,
    locationState: String!,
    status: String!,
    locationVenue: String
  }

  extend type Query {
    getPersonById(personId: String!): Person,
    getPersonTrials(personId: String!): [PersonTrial]
  }

  extend type Mutation {
    addPerson(data: PersonInput): Person,
    addPersonTrial(data: CreateNewTrialInput, personId: String, trialId: String): PersonTrial
  }
`

const resolvers = {
  Query: {
    getPersonById: async (_, args: QueryGetPersonByIdArgs, { dataSources }: { dataSources: DataSources}, __) => {
      const { person } = dataSources
      const { personId } = args
      const result = await person.getById(personId)
      return result
    },
    getPersonTrials: async (_, args: QueryGetPersonTrialsArgs, { dataSources }: { dataSources: DataSources}, __) => {
      const { person } = dataSources
      const { personId } = args
      const result = await person.getPersonTrials(personId)
      return result
    }
  },
  Mutation: {
    addPerson: async (_, args: MutationAddPersonArgs, { dataSources }: { dataSources: DataSources}, __ ) => {
      const { person } = dataSources      
      const result = await person.addNewPerson(args.data)
      return result
    },
    addPersonTrial: async (_, args: MutationAddPersonTrialArgs, { dataSources }: { dataSources: DataSources }, __) => {
      const { person } = dataSources
      const result = await person.addPersonTrial(args.data, args.personId, args.trialId)
      return result
    }
  }
}

exports.Person = typeDef
exports.personResolvers = resolvers
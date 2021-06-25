import { MutationAddPersonArgs, PersonInput, QueryGetPersonByIdArgs } from "../types"
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
    personId: String
    name: String
    email: String
    role: String
  }

  extend type Query {
    getPersonById(personId: String!): Person  
  }

  extend type Mutation {
    addPerson(data: PersonInput): Person
  }
`

const resolvers = {
  Query: {
    getPersonById: async (_, args: QueryGetPersonByIdArgs, { dataSources }: { dataSources: DataSources}, __) => {
      const { person } = dataSources
      const { personId } = args
      const result = await person.getById(personId)
      return result
    }
  },
  Mutation: {
    addPerson: async (_, args: MutationAddPersonArgs, { dataSources }: { dataSources: DataSources}, __ ) => {
      const { person } = dataSources      
      const result = await person.addNewPerson(args.data)
      return result
    }
  }
}

exports.Person = typeDef
exports.personResolvers = resolvers
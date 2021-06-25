
const { gql } = require('apollo-server-azure-functions')

const typeDef = gql`
  input PersonInput {
    name: String
    email: String
    role: String
  }

  type Person {
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
    getPersonById: async (source, args, { dataSources }, state) => {
      const { person } = dataSources
      const { personId } = args
      const result = await person.getById(personId)
      return result
    }
  },
  Mutation: {
    addPerson: async (source, args, { dataSources }, state ) => {
      const { person } = dataSources      
      const { data } = args
      let result = {
        personId: 'newid',
        name: 'Justin Martinez',
        email: 'justinmartinez14@gmail.com',
        role: 'secretary'
      }    
      return result
    }
  }
}

exports.Person = typeDef
exports.personResolvers = resolvers
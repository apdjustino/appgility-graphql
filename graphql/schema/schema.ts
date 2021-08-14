const { makeExecutableSchema, gql } = require('apollo-server-azure-functions')
const { merge } = require('lodash')
const { Person, personResolvers } = require('./person')
const { Trial, trialResolvers } = require('./event')
const { TrialSchema } = require('./trial')

const Query = gql`
  type Query {
    _empty: String
  }
`

const Mutation = gql`
  type Mutation {
    _empty: String
  }
`

const resolvers = {
  Query: {}
}

export const schema = makeExecutableSchema({
  typeDefs: [Query, Mutation, Person, Trial, TrialSchema],
  resolvers: merge(resolvers, personResolvers, trialResolvers)
})
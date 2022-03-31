const { makeExecutableSchema, gql } = require("apollo-server-azure-functions");
const { merge } = require("lodash");
const { Person, personResolvers } = require("./person");
const { Trial, eventResolvers } = require("./event");
const { TrialSchema, trialResolvers } = require("./trial");
const { Schedule } = require("./schedule");

const Query = gql`
    type Query {
        _empty: String
    }
`;

const Mutation = gql`
    type Mutation {
        _empty: String
    }
`;

const resolvers = {
    Query: {},
};

export const schema = makeExecutableSchema({
    typeDefs: [Query, Mutation, Person, Trial, TrialSchema, Schedule],
    resolvers: merge(resolvers, personResolvers, trialResolvers, eventResolvers),
});

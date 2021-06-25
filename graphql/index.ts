const { ApolloServer, gql } = require('apollo-server-azure-functions');
import { schema } from './schema/schema'

const server = new ApolloServer({ schema });
exports.graphqlHandler = server.createHandler();
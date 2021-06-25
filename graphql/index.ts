const { ApolloServer, gql } = require('apollo-server-azure-functions');
import { schema } from './schema/schema'
import Person from './dataSources/Person'

const server = new ApolloServer({ 
    schema,
    dataSources: () => ({
      person: new Person()
    })
});
exports.graphqlHandler = server.createHandler();
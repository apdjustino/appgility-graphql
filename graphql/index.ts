const { ApolloServer, gql } = require('apollo-server-azure-functions');
import { schema } from './schema/schema'
import Person from './dataSources/Person'
import { DataSources } from './types/dataSources';

const server = new ApolloServer({ 
    schema,
    dataSources: (): DataSources => ({
      person: new Person()
    })
});
exports.graphqlHandler = server.createHandler();
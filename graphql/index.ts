const { ApolloServer } = require('apollo-server-azure-functions');
import { schema } from './schema/schema'
import Person from './dataSources/Person'
import { DataSources } from './types/dataSources';
import Trial from './dataSources/Trial';
import { Context, HttpRequest } from '@azure/functions';

const server = new ApolloServer({ 
    schema,
    dataSources: (): DataSources => ({
      person: new Person(),
      trial: new Trial()
    }),
    context: async ({ request }) => {
      const token = request.headers["authorization"] || ''            
      return { token: token.split(' ')[1] }
    }
});
const graphqlHandler = server.createHandler({
  cors: {
    origin: '*',
    credentials: true
  }
});

export default (context: Context, req: HttpRequest) => {
  // https://github.com/Azure/azure-functions-host/issues/6013
  req.headers['x-ms-privatelink-id'] = '';
  // apollo-server only reads this specific string
  req.headers['Access-Control-Request-Headers'] = req.headers['Access-Control-Request-Headers'] || req.headers['access-control-request-headers'];
  return graphqlHandler(context, req);
}
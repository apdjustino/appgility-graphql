import { startServerAndCreateLambdaHandler, handlers } from "@as-integrations/aws-lambda";
import Auth0 from "./dataSources/Auth0";
import Person from "./dataSources/Person";
import Schedule from "./dataSources/Schedule";
import Trial from "./dataSources/Trial";
import { server, ServerContext } from "./server";
import Event from "./dataSources/Event";

export const graphqlHandler = startServerAndCreateLambdaHandler(server, handlers.createAPIGatewayProxyEventV2RequestHandler(), {
    context: async ({ event }) => {
        const token = event.headers["authorization"] || "";

        const context: ServerContext = {
            token: token.split(" ")[1],
            dataSources: {
                person: new Person(),
                event: new Event(),
                trial: new Trial(),
                auth0: new Auth0(),
                schedule: new Schedule(),
            },
        };
        return context;
    },
});

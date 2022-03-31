const { ApolloServer } = require("apollo-server-azure-functions");
import { schema } from "./schema/schema";
import { DataSources } from "./types/dataSources";
import Event from "./dataSources/Event";
import Person from "./dataSources/Person";
import Trial from "./dataSources/Trial";
import Schedule from "./dataSources/Schedule";
import Auth0 from "./dataSources/Auth0";
import { Context, HttpRequest } from "@azure/functions";

const server = new ApolloServer({
    schema,
    dataSources: (): DataSources => ({
        person: new Person(),
        event: new Event(),
        trial: new Trial(),
        auth0: new Auth0(),
        schedule: new Schedule(),
    }),
    context: async ({ request }) => {
        const token = request.headers["authorization"] || "";
        return { token: token.split(" ")[1] };
    },
});
const graphqlHandler = server.createHandler({
    cors: {
        origin: "*",
        credentials: true,
    },
});

export default (context: Context, req: HttpRequest) => {
    // https://github.com/Azure/azure-functions-host/issues/6013
    req.headers["x-ms-privatelink-id"] = "";
    // apollo-server only reads this specific string
    req.headers["Access-Control-Request-Headers"] = req.headers["Access-Control-Request-Headers"] || req.headers["access-control-request-headers"];
    return graphqlHandler(context, req);
};

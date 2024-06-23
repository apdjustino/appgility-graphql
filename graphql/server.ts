import { ApolloServer } from "@apollo/server";
import { schema } from "./schema/schema";
import Event from "./dataSources/Event";
import Person from "./dataSources/Person";
import Trial from "./dataSources/Trial";
import Schedule from "./dataSources/Schedule";
import Auth0 from "./dataSources/Auth0";
import { startStandaloneServer } from "@apollo/server/standalone";

export interface ServerContext {
    dataSources: {
        person: Person;
        event: Event;
        trial: Trial;
        auth0: Auth0;
        schedule: Schedule;
    };
    token: string;
}

export const server = new ApolloServer<ServerContext>({
    schema,
    csrfPrevention: true,
    cache: "bounded",
});

const start = startStandaloneServer(server, {
    context: async ({ req }) => {
        const token = req.headers["authorization"] || "";

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
}).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});

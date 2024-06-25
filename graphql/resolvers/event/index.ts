import { Resolvers } from "../../types";
import { addEvent } from "./mutations/addEvent";
import { addEventTrial } from "./mutations/addEventTrial";
import { updateEvent } from "./mutations/updateEvent";
import { updateEventTrial } from "./mutations/updateEventTrial";
import { getEvent } from "./queries/getEvent";
import { getEventTrial } from "./queries/getEventTrial";
import { getEventTrials } from "./queries/getEventTrials";

export const eventResolvers: Resolvers = {
    Query: {
        getEvent,
        getEventTrial,
        getEventTrials,
    },
    Mutation: {
        addEvent,
        addEventTrial,
        updateEvent,
        updateEventTrial,
    },
};

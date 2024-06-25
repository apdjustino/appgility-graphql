import { Resolvers } from "../../types";
import { addDog } from "./mutations/addDog";
import { addPerson } from "./mutations/addPerson";
import { removeDog } from "./mutations/removeDog";
import { updateDog } from "./mutations/updateDog";
import { getPersonByEmail } from "./queries/getPersonByEmail";
import { getPersonById } from "./queries/getPersonById";
import { getPersonDogs } from "./queries/getPersonDogs";
import { getPersonEvent } from "./queries/getPersonEvent";
import { getPersonEvents } from "./queries/getPersonEvents";
import { searchPerson } from "./queries/searchPerson";

export const personResolvers: Resolvers = {
    Query: {
        getPersonByEmail,
        getPersonById,
        getPersonDogs,
        getPersonEvent,
        getPersonEvents,
        searchPerson,
    },
    Mutation: {
        addDog,
        addPerson,
        removeDog,
        updateDog,
    },
};

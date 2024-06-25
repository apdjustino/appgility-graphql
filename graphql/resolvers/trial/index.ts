import { Resolvers } from "../../types";
import { addRun } from "./mutations/addRun";
import { deleteRun } from "./mutations/deleteRun";
import { editRun } from "./mutations/editRun";
import { moveUp } from "./mutations/moveUp";
import { getTrial } from "./queries/getTrial";
import { getTrialRuns } from "./queries/getTrialRuns";
import { getTrialRunsPaginated } from "./queries/getTrialRunsPaginated";

export const trialResolvers: Resolvers = {
    Query: {
        getTrial,
        getTrialRuns,
        getTrialRunsPaginated,
    },
    Mutation: {
        addRun,
        deleteRun,
        editRun,
        moveUp,
    },
};

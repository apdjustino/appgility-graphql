import { BaseError, HttpErrorCodes } from "../../../errors/BaseError";
import { ServerContext } from "../../../server";
import { MutationResolvers } from "../../../types";
import { v4 as uuid } from "uuid";

export const addRun: MutationResolvers<ServerContext>["addRun"] = async (root, { run, personId, dogId, trialId }, context, info) => {
    try {
        const { trial, person, schedule } = context.dataSources;
        const runId = uuid();

        const createdAt = new Date().toISOString();

        const personRecord = await person.getById(personId);
        const dogRecord = await person.getDog(dogId, personId);

        const trialRun = await trial.addTrialRun(runId, personRecord, dogRecord, trialId, run, createdAt);
        await person.addPersonRun(personRecord, dogRecord, runId, trialId, run, createdAt);
        await schedule.addScheduleRun(runId, personRecord, dogRecord, trialId, run, createdAt);

        return trialRun;
    } catch (error) {
        const err: Error = error as Error;
        throw BaseError(err.message, err, HttpErrorCodes.INTERNAL_SERVER_ERROR, { stack: err.stack });
    }
};

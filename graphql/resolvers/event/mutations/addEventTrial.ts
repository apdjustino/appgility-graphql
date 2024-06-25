import { BaseError, HttpErrorCodes } from "../../../errors/BaseError";
import { ServerContext } from "../../../server";
import { MutationResolvers, AddTrial } from "../../../types";
import { v4 as uuidv4 } from "uuid";

export const addEventTrial: MutationResolvers<ServerContext>["addEventTrial"] = async (root, { eventTrial }, context, info) => {
    try {
        const createdAt = new Date().toISOString();
        const { event, trial } = context.dataSources;
        const trialId = uuidv4();
        const result = await event.addEventTrial(trialId, eventTrial, createdAt);

        const addTrialInput: AddTrial = {
            eventId: eventTrial.eventId,
            trialDate: eventTrial.trialDate,
        };
        await trial.addTrial(trialId, addTrialInput);
        return result;
    } catch (error) {
        const err: Error = error as Error;
        throw BaseError(err.message, err, HttpErrorCodes.INTERNAL_SERVER_ERROR, { stack: err.stack });
    }
};

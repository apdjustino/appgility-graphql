import { BaseError, HttpErrorCodes } from "../../../errors/BaseError";
import { ServerContext } from "../../../server";
import { MutationResolvers, AddTrial, UpdateTrial } from "../../../types";
import { v4 as uuidv4 } from "uuid";

export const updateEventTrial: MutationResolvers<ServerContext>["updateEventTrial"] = async (root, { eventTrial, trialId, eventId }, context, info) => {
    try {
        const { event, trial } = context.dataSources;
        const updateTrialInput: UpdateTrial = {
            id: trialId,
            trialId: trialId,
            eventId: eventId,
            type: "trial",
            trialDate: eventTrial.trialDate,
        };

        const result = await event.updateEventTrial(trialId, eventId, eventTrial);
        await trial.updateTrial(trialId, updateTrialInput);
        return result;
    } catch (error) {
        const err: Error = error as Error;
        throw BaseError(err.message, err, HttpErrorCodes.INTERNAL_SERVER_ERROR, { stack: err.stack });
    }
};

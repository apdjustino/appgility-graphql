import { BaseError, HttpErrorCodes } from "../../../errors/BaseError";
import { ServerContext } from "../../../server";
import { MutationResolvers } from "../../../types";

export const moveUp: MutationResolvers<ServerContext>["moveUp"] = async (root, { trialId, runId, newLevel }, context, info) => {
    try {
        const { trial } = context.dataSources;
        const trialRun = await trial.getTrialRun(trialId, runId);
        const updatedTrialRun = { ...trialRun };

        updatedTrialRun.level = newLevel;
        const response = await trial.updateTrialRun(trialId, runId, updatedTrialRun);
        return response;
    } catch (error) {
        const err: Error = error as Error;
        throw BaseError(err.message, err, HttpErrorCodes.INTERNAL_SERVER_ERROR, { stack: err.stack });
    }
};

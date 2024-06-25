import { BaseError, HttpErrorCodes } from "../../../errors/BaseError";
import { ServerContext } from "../../../server";
import { MutationResolvers, Run } from "../../../types";

export const deleteRun: MutationResolvers<ServerContext>["deleteRun"] = async (root, { runId, trialId }, context, info) => {
    try {
        const { trial } = context.dataSources;
        const runToDelete = await trial.getTrialRun(trialId, runId);
        runToDelete.deleted = true;

        const response = await trial.updateTrialRun(trialId, runId, runToDelete);
        return response;
    } catch (error) {
        const err: Error = error as Error;
        throw BaseError(err.message, err, HttpErrorCodes.INTERNAL_SERVER_ERROR, { stack: err.stack });
    }
};

import { BaseError, HttpErrorCodes } from "../../../errors/BaseError";
import { ServerContext } from "../../../server";
import { MutationResolvers, Run } from "../../../types";

export const editRun: MutationResolvers<ServerContext>["editRun"] = async (root, { runId, trialId, updatedRun }, context, info) => {
    try {
        const { trial } = context.dataSources;
        const trialRun = await trial.getTrialRun(trialId, runId);

        const updatedRunData: Run = { ...trialRun, ...updatedRun };
        const response = await trial.updateTrialRun(trialId, runId, updatedRunData);
        return response;
    } catch (error) {
        const err: Error = error as Error;
        throw BaseError(err.message, err, HttpErrorCodes.INTERNAL_SERVER_ERROR, { stack: err.stack });
    }
};

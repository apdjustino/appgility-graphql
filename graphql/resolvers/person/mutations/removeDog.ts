import { BaseError, HttpErrorCodes } from "../../../errors/BaseError";
import { ServerContext } from "../../../server";
import { MutationResolvers } from "../../../types";

export const removeDog: MutationResolvers<ServerContext>["removeDog"] = async (root, { personId, dogId }, context, info) => {
    try {
        const { person } = context.dataSources;
        const result = await person.removeDog(personId, dogId);
        return result;
    } catch (error) {
        const err: Error = error as Error;
        throw BaseError(err.message, err, HttpErrorCodes.INTERNAL_SERVER_ERROR, { stack: err.stack });
    }
};

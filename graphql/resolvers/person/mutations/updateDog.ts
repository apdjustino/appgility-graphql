import { BaseError, HttpErrorCodes } from "../../../errors/BaseError";
import { ServerContext } from "../../../server";
import { MutationResolvers } from "../../../types";

export const updateDog: MutationResolvers<ServerContext>["updateDog"] = async (root, { personId, dog, dogId }, context, info) => {
    try {
        const { person } = context.dataSources;
        const result = await person.updateDog(personId, dogId, dog);
        return result;
    } catch (error) {
        const err: Error = error as Error;
        throw BaseError(err.message, err, HttpErrorCodes.INTERNAL_SERVER_ERROR, { stack: err.stack });
    }
};

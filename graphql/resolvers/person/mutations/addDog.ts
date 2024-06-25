import { BaseError, HttpErrorCodes } from "../../../errors/BaseError";
import { ServerContext } from "../../../server";
import { MutationResolvers } from "../../../types";

export const addDog: MutationResolvers<ServerContext>["addDog"] = async (root, { personId, dog }, context, info) => {
    try {
        const createdAt = new Date().toISOString();
        const { person } = context.dataSources;
        const result = await person.addDog(personId, dog, createdAt);
        return result;
    } catch (error) {
        const err: Error = error as Error;
        throw BaseError(err.message, err, HttpErrorCodes.INTERNAL_SERVER_ERROR, { stack: err.stack });
    }
};

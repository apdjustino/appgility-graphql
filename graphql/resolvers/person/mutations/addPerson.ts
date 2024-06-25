import { BaseError, HttpErrorCodes } from "../../../errors/BaseError";
import { ServerContext } from "../../../server";
import { Auth0User, MutationResolvers } from "../../../types";
import * as yup from "yup";
import { v4 as uuid } from "uuid";

export const addPerson: MutationResolvers<ServerContext>["addPerson"] = async (root, { data, password }, context, info) => {
    try {
        const { person, auth0 } = context.dataSources;
        const emailCheck = await person.getByEmail(data.email);

        if (emailCheck) {
            throw new Error(`Person with ${data.email} already exists in Appgility database`);
        }

        // payload validation -- need to add special validation here because we don't want orphaned person accounts due to failed Auth0 signup
        let schema = yup.object().shape({
            id: yup.string().uuid(),
            personId: yup.string().uuid("Not a valid uuid"),
            name: yup.string(),
            email: yup.string().email("Invalid email address"),
            role: yup.string(),
            phone: yup.string(),
            address: yup.string(),
            city: yup.string(),
            state: yup.string(),
            zip: yup.string(),
            claimed: yup.bool(),
        });

        const passwordSchema = yup.object().shape({
            password: yup.string().matches(/(?=^.{8,}$)((?=.*\w)(?=.*[A-Z])(?=.*[0-9]))^.*/, {
                message: "Password must be at least 8 characters and include a lowercase character, an uppercase character, and a number",
                excludeEmptyString: true,
            }),
        });

        try {
            await passwordSchema.validate({ password: password });
        } catch (error) {
            throw new Error(error.errors[0]);
        }

        try {
            await schema.validate(data);
        } catch (error) {
            throw new Error(`Error with Person payload: ${error}`);
        }

        data.personId = uuid();
        data.id = data.personId;
        data.claimed = false;

        const createdAt = new Date().toISOString();

        const newPersonResult = await person.addNewPerson(data, createdAt);

        if (password) {
            data.claimed = true;

            const auth0Payload: Auth0User = {
                email: data.email,
                name: data.name,
                password: password,
                app_metadata: {
                    personId: newPersonResult.personId,
                },
            };

            await auth0.createNewUser(auth0Payload);
        }

        return newPersonResult;
    } catch (error) {
        const err: Error = error as Error;
        throw BaseError(err.message, err, HttpErrorCodes.INTERNAL_SERVER_ERROR, { stack: err.stack });
    }
};

import { mapSchema, getDirective, MapperKind } from "@graphql-tools/utils";
import { defaultFieldResolver, GraphQLSchema, GraphQLFieldConfig } from "graphql";
import { BaseError, HttpErrorCodes } from "../errors/BaseError";
import { ValidationRules, verify } from "../dataSources/utils";

function authenticateRequest(
    typeDirectiveArgumentMaps: Record<string, any>,
    directiveName: string,
    schema: GraphQLSchema,
    fieldConfig: GraphQLFieldConfig<any, any, any>,
    fieldName: string,
    typeName: string,
) {
    // finds the directive by the name provided in the schema
    const authDirectiveRecord: Record<string, any> = getDirective(schema, fieldConfig, directiveName)?.[0] ?? typeDirectiveArgumentMaps[typeName];

    // only override the graphql fields that have been decorated with the directive
    if (authDirectiveRecord) {
        const { resolve = defaultFieldResolver } = fieldConfig;
        fieldConfig.resolve = async function (source, args, context, info) {
            // this function overrides the resolver to call authentication functions before calling logic in resolver
            const authDirective = fieldConfig.astNode.directives?.find((directive) => directive.name.value === "auth");

            if (authDirective && authDirective.arguments) {
                const rules: ValidationRules = {
                    allowedRoles: (authDirective.arguments[0].value as any).values.map((v) => v.value),
                };
                try {
                    await verify(context.token, rules);
                } catch (error) {
                    const err = new Error(error);
                    throw BaseError(err.message, err, HttpErrorCodes.FORBIDDEN);
                }
            }

            return resolve(source, args, context, info);
        };

        return fieldConfig;
    }

    return undefined;
}

export function authDirectiveTransformer() {
    const typeDirectiveArgumentMaps: Record<string, any> = {};
    return (schema: GraphQLSchema) =>
        mapSchema(schema, {
            [MapperKind.QUERY_ROOT_FIELD]: (fieldConfig, _fieldName, typeName) => {
                authenticateRequest(typeDirectiveArgumentMaps, "auth", schema, fieldConfig, _fieldName, typeName);
                return undefined;
            },
            [MapperKind.MUTATION_ROOT_FIELD]: (fieldConfig, _fieldName, typeName) => {
                authenticateRequest(typeDirectiveArgumentMaps, "auth", schema, fieldConfig, _fieldName, typeName);
                return undefined;
            },
        });
}

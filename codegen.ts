import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
    schema: "./graphql/schema/*.graphql",
    generates: {
        "./graphql/types/index.ts": {
            config: {
                useIndexSignature: true,
                contextType: "../server#ServerContext",
            },
            plugins: ["typescript", "typescript-resolvers"],
        },
    },
};

export default config;

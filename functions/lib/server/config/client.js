"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClient = void 0;
const graphql_request_1 = require("graphql-request");
const getClient = () => {
    const url = process.env.ENDPOINT;
    return new graphql_request_1.GraphQLClient(url, {
        headers: {
            "x-hasura-admin-secret": process.env.ADMIN_SECRET,
        },
    });
};
exports.getClient = getClient;
//# sourceMappingURL=client.js.map
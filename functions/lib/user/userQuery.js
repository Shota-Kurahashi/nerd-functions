"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DELETE_USER = exports.CREATE_USER = exports.GET_USER = void 0;
const graphql_request_1 = require("graphql-request");
const userInfo = (0, graphql_request_1.gql) `
  fragment UserInfo on users {
    id
  }
`;
exports.GET_USER = (0, graphql_request_1.gql) `
  query GetUser($id: String!) {
    users_by_pk(id: $id) {
      ...UserInfo
    }
  }
  ${userInfo}
`;
exports.CREATE_USER = (0, graphql_request_1.gql) `
  mutation CreateUser(
    $id: String!
    $isAnonymous: Boolean
  ) {
    insert_users_one(
      object: {
        id: $id
        anonymous: $isAnonymous
      }
      on_conflict: { constraint: users_pkey }
    ) {
      ...UserInfo
    }
  }
  ${userInfo}
`;
exports.DELETE_USER = (0, graphql_request_1.gql) `
  mutation DeleteUser($id: String!) {
    delete_users_by_pk(id: $id) {
      id
    }
  }
`;
//# sourceMappingURL=userQuery.js.map
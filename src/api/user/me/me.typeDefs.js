import { gql } from "apollo-server-express";

export default gql`
  type Mutation {
    # me(username: String!): User!
    me(username: String!): String!
  }
`;

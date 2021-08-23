import { gql } from "apollo-server-express";

export default gql`
  type Mutation {
    confirmPassword(username: String!, password: String!): String!
  }
`;

import { gql } from "apollo-server-express";

export default gql`
  type Mutation {
    registerUsername(
      username: String!
      stage: Int!
      horizontalNum: Int!
      heart: Int!
      gameEnd: Boolean!
    ): Result!
  }
`;

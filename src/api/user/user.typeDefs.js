import { gql } from "apollo-server-express";

export default gql`
  type User {
    id: String!
    username: String!
    password: String!
    stage: Int!
    horizontalNum: Int!
    heart: Int!
    gameEnd: Boolean!
  }

  type CheckRankResult {
    success: String!
    message: String!
    rank: Int
  }
`;

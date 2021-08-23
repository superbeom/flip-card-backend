import { gql } from "apollo-server-express";

export default gql`
  type CheckRankResult {
    success: String!
    message: String!
    rank: Int
  }

  type Query {
    checkRank: CheckRankResult!
  }
`;

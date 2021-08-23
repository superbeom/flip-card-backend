import { gql } from "apollo-server-express";

export default gql`
  type Mutation {
    # updateGameInfo(
    #   username: String!
    #   stage: Int
    #   horizontalNum: Int
    #   heart: Int
    #   gameEnd: Boolean
    # ): Boolean!
    updateGameInfo(
      username: String!
      stage: Int
      horizontalNum: Int
      heart: Int
      gameEnd: Boolean
    ): String!
  }
`;

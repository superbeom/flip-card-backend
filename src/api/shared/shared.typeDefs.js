import { gql } from "apollo-server-express";

export default gql`
  type Result {
    success: Boolean!
    message: String!
  }
`;

import { prisma } from "../../../../generated/prisma-client";
import checkUsername from "../../../apiUtils/checkUsername";

export default {
  Mutation: {
    createAccount: async (_, args) => {
      const { username, secret } = args;

      const existUsername = await prisma.$exists.user({ username });

      if (existUsername) {
        throw Error("This username is already taken!!");
      }

      if (checkUsername(username)) {
        try {
          await prisma.createUser({
            username,
            secret,
          });

          return true;
        } catch (error) {
          console.log(error);

          return false;
        }
      }
    },
  },
};

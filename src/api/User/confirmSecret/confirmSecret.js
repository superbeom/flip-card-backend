import { prisma } from "../../../../generated/prisma-client";
import { generateToken } from "../../../utils";

export default {
  Mutation: {
    confirmSecret: async (_, args) => {
      const { username, secret } = args;
      const user = await prisma.user({ username });

      console.log("user: ", user);

      if (user.secret === secret) {
        // JWT
        const test = generateToken(user.id);
        console.log("token: ", test);
        return test;

        // return generateToken(user.id);
      } else {
        throw Error("Wrong username and secret combination");
      }
    },
  },
};

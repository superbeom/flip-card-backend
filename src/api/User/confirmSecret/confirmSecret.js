import { prisma } from "../../../../generated/prisma-client";
import { generateToken } from "../../../utils";

export default {
  Mutation: {
    confirmSecret: async (_, args) => {
      const { username, secret } = args;
      const user = await prisma.user({ username });

      if (user.secret === secret) {
        // JWT
        return generateToken(user.id);
      } else {
        throw Error("Wrong username and secret combination");
      }
    },
  },
};

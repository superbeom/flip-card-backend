import { prisma } from "../../../../generated/prisma-client";
import bcrypt from "bcrypt";

import { generateToken } from "../../../utils";

export default {
  Mutation: {
    confirmSecret: async (_, args) => {
      const { username, secret } = args;

      const user = await prisma.user({ username });

      try {
        /* Password Decryption */
        const correct = bcrypt.compareSync(secret, user.secret);

        if (correct) {
          /* JWT */
          return generateToken(user.id);
        } else {
          throw Error("Wrong username and secret combination");
        }
      } catch (error) {
        console.log("Error @compareSecret_confirmSecret: ", error);

        return "Wrong";
      }
    },
  },
};

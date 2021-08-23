import prisma from "../../../prisma";
// import bcrypt from "bcrypt";

// import checkUsername from "../../../apiUtils/checkUsername";

export default {
  Mutation: {
    createAccount: async (_, { username, secret }) => {
      return false;

      // const salt = bcrypt.genSaltSync(10);

      // const existUsername = await prisma.$exists.user({ username });

      // if (existUsername) {
      //   throw Error("This username is already taken!!");
      // }

      // if (checkUsername(username)) {
      //   try {
      //     /* Password Encryption */
      //     const hash = bcrypt.hashSync(secret, salt);

      //     await prisma.createUser({
      //       username,
      //       secret: hash,
      //     });

      //     return true;
      //   } catch (error) {
      //     console.log("Error @if_createAccount: ", error.message);

      //     return false;
      //   }
      // }
    },
  },
};

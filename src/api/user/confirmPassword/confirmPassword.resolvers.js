// import bcrypt from "bcrypt";

export default {
  Mutation: {
    confirmPassword: async (_, { username, password }) => {
      return "TEST";
      // const user = await prisma.user({ username });

      // try {
      //   if (!user) {
      //     throw Error("This username does not exist");
      //   }

      //   /* Password Decryption */
      //   const correct = bcrypt.compareSync(password, user.password);

      //   if (correct) {
      //     /* JWT */
      //     return generateToken(user.id);
      //   } else {
      //     throw Error("Wrong username and password combination");
      //   }
      // } catch (error) {
      //   console.log("Error @compareSecret_confirmSecret: ", error);

      //   if (error.message.includes("exist")) {
      //     return "Does't Exist";
      //   } else if (error.message.includes("combination")) {
      //     return "Wrong";
      //   } else {
      //     return "Wrong";
      //   }
      // }
    },
  },
};

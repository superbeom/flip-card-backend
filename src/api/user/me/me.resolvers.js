import prisma from "../../../prisma";

export default {
  Mutation: {
    me: async (_, args) => {
      return "TEST";

      // const { username } = args;

      // await prisma.updateUser({
      //   where: {
      //     username,
      //   },
      //   data: {
      //     username,
      //   },
      // });

      // return prisma.user({ username });
    },
  },
};

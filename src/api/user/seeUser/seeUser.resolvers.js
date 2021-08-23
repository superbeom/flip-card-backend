import prisma from "../../../prisma";

export default {
  Query: {
    seeUser: (_, args) => {
      return "TEST";

      // const { username } = args;

      // return prisma.user({ username });
    },
  },
};

import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    me: async (_, args) => {
      const { username } = args;

      await prisma.updateUser({
        where: {
          username,
        },
        data: {
          username,
        },
      });

      return prisma.user({ username });
    },
  },
};

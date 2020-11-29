import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    checkRank: async (_, args) => {
      const { username } = args;

      const users = await prisma.users({
        orderBy: "stage_DESC",
      });

      const rank = users.findIndex((item) => item.username === username) + 1;

      return rank;
    },
  },
};

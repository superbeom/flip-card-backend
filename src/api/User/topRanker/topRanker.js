import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    topRanker: async () => {
      const users = await prisma.users({
        orderBy: "stage_DESC",
        first: 12,
      });

      return users;
    },
  },
};

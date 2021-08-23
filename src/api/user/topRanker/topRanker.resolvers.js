import prisma from "../../../prisma";

export default {
  Mutation: {
    topRanker: async () => {
      return "TEST";

      // const users = await prisma.users({
      //   orderBy: "stage_DESC",
      //   first: 12,
      // });

      // return users;
    },
  },
};

import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    searchUser: (_, args) => {
      const { term } = args;

      return prisma.users({
        where: {
          username_contains: term
        }
      });
    }
  }
};

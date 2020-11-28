import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    updateGameInfo: async (_, args) => {
      const { username, stage, horizontalNum, heart, gameEnd } = args;

      console.log("Backend - username: ", username);

      await prisma.updateUser({
        where: {
          username,
        },
        data: {
          stage,
          horizontalNum,
          heart,
          gameEnd,
        },
      });

      try {
        return true;
      } catch (error) {
        console.log("Error @updateGameInfo");
        return false;
      }
    },
  },
};

import prisma from "../../../prisma";

export default {
  Mutation: {
    updateGameInfo: async (
      _,
      { username, stage, horizontalNum, heart, gameEnd }
    ) => {
      return "TEST";

      // await prisma.updateUser({
      //   where: {
      //     username,
      //   },
      //   data: {
      //     stage,
      //     horizontalNum,
      //     heart,
      //     gameEnd,
      //   },
      // });

      // try {
      //   return true;
      // } catch (error) {
      //   console.log("Error @updateGameInfo");
      //   return false;
      // }
    },
  },
};

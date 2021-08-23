import prisma from "../../../prisma";

export default {
  Query: {
    checkRank: async (_, { username }) => {
      try {
        const users = await prisma.user.findMany({
          select: {
            username: true,
            stage: true,
          },
          orderBy: {
            stage: "asc",
          },
        });

        const rank = users.findIndex((user) => user.username === username) + 1;

        return {
          success: true,
          message: "Check your rank!",
          rank,
        };
      } catch (error) {
        console.log("Error @user_checkRank: ", error.message);

        return {
          success: false,
          message: "Fails to check your rank.\nPlease try it again later.",
        };
      }
    },
  },
};

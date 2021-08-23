import prisma from "../../../prisma";
import {
  CHECK_RANK_SUCCESS_MESSAGE,
  CHECK_RANK_FAIL_MESSAGE,
} from "../../../strings";

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
          message: CHECK_RANK_SUCCESS_MESSAGE,
          rank,
        };
      } catch (error) {
        console.log("Error @user_checkRank: ", error.message);

        return {
          success: false,
          message: CHECK_RANK_FAIL_MESSAGE,
        };
      }
    },
  },
};

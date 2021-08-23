import prisma from "../../../prisma";
import {
  TOP_RANKER_SUCCESS_MESSAGE,
  TOP_RANKER_FAIL_MESSAGE,
} from "../../../strings";

export default {
  Query: {
    topRanker: async () => {
      try {
        const topRankers = await prisma.user.findMany({
          take: 12,
          orderBy: {
            stage: "desc",
          },
        });

        return {
          success: true,
          message: TOP_RANKER_SUCCESS_MESSAGE,
          topRankers,
        };
      } catch (error) {
        console.log("Error @user_topRanker: ", error.message);

        return {
          success: false,
          message: TOP_RANKER_FAIL_MESSAGE,
        };
      }
    },
  },
};

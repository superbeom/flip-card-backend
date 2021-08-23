import prisma from "../../../prisma";

import { protectedResolver } from "../../shared/shared.utils";

const checkRankResolver = async (_, __, { loggedInUser }) => {
  try {
    // const users = await prisma.users({
    //   orderBy: "stage_DESC",
    // });

    // const rank =
    //   users.findIndex((item) => item.username === loggedInUser.username) + 1;

    return {
      success: true,
      message: "Check your rank!",
      // rank,
      rank: 10,
    };
  } catch (error) {
    console.log("Error @user_checkRank: ", error.message);

    return {
      success: false,
      message: "Fails to check your rank.\nPlease try it again later.",
    };
  }
};

export default {
  Mutation: {
    checkRank: protectedResolver(checkRankResolver),
  },
};

import prisma from "../../../prisma";
import {
  USERNAME_ALREADY_TAKEN,
  REGISTER_USERNAME_SUCCESS_MESSAGE,
  REGISTER_USERNAME_FAIL_MESSAGE,
} from "../../../strings";

import { createRandomId } from "../user.utils";

export default {
  Mutation: {
    registerUsername: async (
      _,
      { username, stage, horizontalNum, heart, gameEnd }
    ) => {
      try {
        const existingUser = await prisma.user.findUnique({
          where: {
            username,
          },
          select: {
            id: true,
          },
        });

        if (existingUser) {
          return {
            success: false,
            message: USERNAME_ALREADY_TAKEN,
          };
        }

        const newUserId = createRandomId();

        await prisma.user.create({
          data: {
            id: newUserId,
            username,
            stage,
            horizontalNum,
            heart,
            gameEnd,
          },
        });

        return {
          success: true,
          message: REGISTER_USERNAME_SUCCESS_MESSAGE,
        };
      } catch (error) {
        console.log("Error @user_registerUsername: ", error.message);

        return {
          success: false,
          message: REGISTER_USERNAME_FAIL_MESSAGE,
        };
      }
    },
  },
};

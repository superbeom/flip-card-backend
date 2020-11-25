import { prisma } from "../../../../generated/prisma-client";
import CheckUsername from "../../../apiUtils/CheckUsername";

export default {
  Mutation: {
    editUser: (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { avatar, username } = args;
      const { user } = request;

      const mutationUpdateUser = prisma.updateUser({
        where: {
          id: user.id,
        },
        data: {
          avatar,
          username,
        },
      });

      if (username === undefined) {
        return mutationUpdateUser;
      } else {
        if (CheckUsername(username)) {
          try {
            return mutationUpdateUser;
          } catch (error) {
            console.log(error);
          }
        }
      }
    },
  },
};

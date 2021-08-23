export const createRandomId = () =>
  Math.random().toString(32).slice(2, 15) +
  Math.random().toString(32).slice(2, 15);

export const protectedResolver = (resolver) => (root, args, context, info) => {
  if (!context.loggedInUser) {
    return {
      success: false,
      message: "Please log in to perform this action.",
    };
  }

  return resolver(root, args, context, info);
};

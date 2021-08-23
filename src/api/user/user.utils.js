export const createRandomId = () =>
  Math.random().toString(32).slice(2, 15) +
  Math.random().toString(32).slice(2, 15);

require("dotenv").config();
import { createServer } from "http";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import logger from "morgan";

import { typeDefs, resolvers } from "./schema";

(async function () {
  const PORT = process.env.PORT || 2020;
  const app = express();

  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await apolloServer.start();

  app.use(logger("tiny"));
  apolloServer.applyMiddleware({ app });

  const httpServer = createServer(app);

  httpServer.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}/graphql ✅`);
  });
})();

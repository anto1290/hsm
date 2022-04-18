const express = require("express");
const { WebSocketServer } = require("ws");
const { useServer } = require("graphql-ws/lib/use/ws");
const { graphqlUploadExpress } = require("graphql-upload");
const db = require("./database");
const { join } = require("path");
const whitelist = ["http://localhost:3000", "http://localhost:4000"];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};
(async () => {
  const app = express();
  db.connect();
  app.use("/uploads", express.static(join(__dirname, "/uploads")));
  require("./middlewares").init(app, db);
  const apolloServer = require("./graphql").createApolloServer();
  const schema = require("./graphql").schemaApolloServer();
  // apply middleware
  await apolloServer.start();
  app.use(graphqlUploadExpress());
  apolloServer.applyMiddleware({ app, path: "/graphql", cors: corsOptions });
  const server = app.listen(4000, () => {
    // create and use the websocket server
    const wsServer = new WebSocketServer({
      server,
      path: "/graphql",
    });

    useServer({ schema }, wsServer);
    console.log("Apollo and Subsription server is up");
  });
})();

const express = require("express");

const router = require("./routers/friends.router");

const app = express();

const PORT = 3000;

app.use((req, res, next) => {
  const start = Date.now();

  next();

  const end = Date.now() - start;

  console.log(`${req.method} ${req.baseUrl}${req.url} ${end}ms`);
});

app.use(express.json());

app.use("/friends", router);

app.use("/friends/:id", router);

app.listen(PORT, () => {
  console.log("listening on port 3000");
});

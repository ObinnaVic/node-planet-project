const express = require("express");

const controller = require("./controllers/friends.controller");

const app = express();

const PORT = 3000;


app.get("/friends", controller.getAllFriends);

app.get("/friends/:id", controller.getSingleFriend);

app.use(express.json());

app.post("/friends", controller.postFriend);

app.listen(PORT, () => {
    console.log("listening on port 3000");
});



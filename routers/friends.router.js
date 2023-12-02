const express = require("express");

const controller = require("../controllers/friends.controller");

const router = express.Router();

router.route("/").get(controller.getAllFriends).post(controller.postFriend);

router.route("/friends/:id").get(controller.getSingleFriend);

module.exports = router;

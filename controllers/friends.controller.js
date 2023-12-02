const friends = require("../model/friends.model");

function getAllFriends(req, res) {
    res.json(friends)
}

function getSingleFriend(req, res) {
    let friend = Number(req.params.id);
    friend = friends[friend];

    if (friend) {
        res.status(200).json(friend);
    } else {
        res.status(404).json({
            error: "Friend not found"
        })
    }
}

function postFriend(req, res) {
    if (!req.body.name) {
        return res.status(400).json({
            error: "Name field cannot be empty"
        });
    }

    const newFriend = {
        name: req.body.name,
        id: friends.length
    }

    friends.push(newFriend);

    res.status(200).json(newFriend);
}

module.exports = {
    getAllFriends,
    getSingleFriend,
    postFriend
}
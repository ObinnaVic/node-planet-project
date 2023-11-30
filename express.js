const express = require("express");

const app = express();

const PORT = 3000;

const friends = [
    {
        id: 0,
        name: "Victor",
    },
    {
        id: 1,
        name: "Nkire",
    },
    {
        id: 2,
        name: "Samuel",
    },
    {
        id: 3,
        name: "Faith",
    },
    {
        id: 4,
        name: "Favour",
    }
]

app.get("/friends", (req, res) => {
    res.json(friends)
})

app.get("/friends/:id", (req, res) => {
    let friend = Number(req.params.id);
    friend = friends[friend];

    if (friend) {
        res.status(200).json(friend);
    } else {
        res.status(404).json({
            error: "Friend not found"
        })
    }
})

app.listen(PORT, () => {
    console.log("listening on port 3000");
});



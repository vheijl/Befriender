const express = require("express");
const router = express.Router();

router.post("/post", (req, res) => {
    // Post a message of type text or location to a provided user from a provided user
    res.status(200).send({message: "Not yet implemented"});
});

router.get("/all", (req, res) => {
    // Get all messages for a provided user
    res.status(200).send({message: "Not yet implemented"});
});

module.exports = router
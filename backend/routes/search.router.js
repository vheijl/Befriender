const express = require("express");
const router = express.Router();

router.post("/keyword/:keyword", (req, res) => {
    // Search a friends description for a keyword
    res.status(200).send({message: "Not yet implemented"});
});

module.exports = router
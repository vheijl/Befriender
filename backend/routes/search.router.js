const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/keyword/:keyword", (req, res) => {

    const { keyword } = req.params;
    // Search a friends description for a keyword
    let sql = `SELECT * FROM user WHERE username LIKE '%${keyword}%' OR description LIKE '%${keyword}%'`;
    sql = db.mysql.format(sql, [keyword, keyword]);

    db.executeQuery(sql)
        .then(result => {
            console.log(result);
            res.status(200).send(result);
        })
});

module.exports = router
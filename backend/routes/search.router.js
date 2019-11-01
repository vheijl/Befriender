const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/keyword", (req, res) => {

    const { keyword, userId } = req.body;
    // Search a friends description for a keyword
    // let sql = `SELECT * FROM user WHERE username LIKE '%${keyword}%' OR description LIKE '%${keyword}%'`;

    // let sql = `SELECT * FROM user WHERE (username LIKE '%${keyword}%' OR description LIKE '%${keyword}%') AND user.id NOT IN (SELECT DISTINCT user.id FROM friends, user WHERE friends.friend2 = user.id AND friends.friend1 = ${userId} AND user.id IN (SELECT user.id FROM friends, user WHERE friends.friend1 = user.id AND friends.friend2 = ${userId})) AND user.id != ${userId}`;
    let sql = `SELECT * FROM user WHERE (username LIKE '%${keyword}%' OR description LIKE '%${keyword}%') AND user.id != ${userId}`;

    sql = db.mysql.format(sql);

    db.executeQuery(sql)
        .then(result => {
            console.log(result);
            res.status(200).send(result);
        })
});

module.exports = router
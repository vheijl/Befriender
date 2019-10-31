const express = require("express");
const router = express.Router();
const db = require("../db");


router.post("/add", (req, res) => {
     // Add a friend

     const { friend1, friend2 } = req.body;

     let sql = "INSERT INTO ?? (??) VALUES (?)";
     const table = "friends";
     const columns = ["friend1", "friend2"];
     const values = [friend1, friend2];
     const inserts = [table, columns, values];
     sql = db.mysql.format(sql, inserts);
 
     db.executeQuery(sql)
         .then(result => {
             res.status(200).send({message: "Friend added"});
         })
});

router.get("/all/:userId", (req, res) => {
    // Get all friends for a provided user

    const { userId } = req.params;

    let sql = "SELECT DISTINCT user.id, user.username, user.description, user.image_url, user.longitude, user.latitude FROM friends, user WHERE friends.friend2 = user.id AND friends.friend1 = ? AND user.id IN (SELECT user.id FROM friends, user WHERE friends.friend1 = user.id AND friends.friend2 = ?)";
    let values = [userId, userId];
    sql = db.mysql.format(sql, values);
    db.executeQuery(sql)
        .then(result => {
            res.status(200).send(result);
        })
});

router.get("/request/:userId", (req, res) => {

    const { userId } = req.params;

    let sql = "SELECT user.id, user.username, user.description, user.image_url FROM user, friends WHERE user.id = friends.friend1 AND friends.friend2 = ? AND user.id NOT IN (SELECT user.id FROM friends, user WHERE user.id = friends.friend2 AND friends.friend1 = ?)"
    sql = db.mysql.format(sql, [userId, userId]);

    db.executeQuery(sql)
        .then(result => {
            res.status(200).send(result);
        })
});

module.exports = router
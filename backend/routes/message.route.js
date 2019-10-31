const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/post", (req, res) => {

    const { from_id, to_id, type, message } = req.body;

    let sql = "INSERT INTO ?? (??) VALUES(?)";
    const table = "messages";
    const columns = ["from_id", "to_id", "type", "message"];
    const values = [from_id, to_id, type, message];
    const inserts = [table, columns, values];
    sql = db.mysql.format(sql, inserts);

    db.executeQuery(sql)
        .then(result => {
            res.status(200).send({id: result.insertId});
        })

    // Post a message of type text or location to a provided user from a provided user
});

router.get("/all/:user1/:user2", (req, res) => {
    // Get all messages for provided users

    const { user1, user2 } = req.params;
    
    let sql = "SELECT * FROM ?? where (from_id = ? AND to_id = ?) OR (from_id = ? AND to_id = ?)";
    const table = "messages";
    const values = [user1, user2, user2, user1];
    const inserts = [table, ...values];
    sql = db.mysql.format(sql, inserts);
    db.executeQuery(sql)
        .then(result => {
            res.status(200).send(result);
        })
});

module.exports = router
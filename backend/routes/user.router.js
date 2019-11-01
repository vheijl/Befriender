const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/login", (req, res) => {

    const { email, password } = req.body;

    console.log(req.body);

    let sql = "SELECT id FROM ?? WHERE email = ? AND password = ?";
    const table = "user";
    const values = [email, password];
    const inserts = [table, ...values];
    sql = db.mysql.format(sql, inserts);

    db.executeQuery(sql)
        .then(result => {
            // Deconstruct the id object from the result array.
            const [{ id }] = result;
            res.status(200).send({ id })
        });
});

router.post("/register", (req, res) => {
    // Register / create a user

    const { username, email, password, description, image_url, latitude, longitude } = req.body;

    let sql = "INSERT INTO ?? (??) VALUES(?)";
    const table = "user";
    const columns = ["username", "email", "password", "description", "image_url", "latitude", "longitude"];
    const values = [username, email, password, description, image_url, latitude, longitude];
    const inserts = [table, columns, values];
    sql = db.mysql.format(sql, inserts);

    // Check that lengths are good
    // if not return bad request 400

    db.executeQuery(sql)
        .then(result => {
            // return the inserted userId to save in sessionStorage
            res.status(200).send({ id: result.insertId });
        })
});

router.put("/update", (req, res) => {
    // Update a users info

    const { id, username, email, password, description, image_url } = req.body;

    let sql = "Update ?? SET username=?, email=?, password=?, description=?, image_url=? WHERE id = ?";
    const table = "user";
    const values = [username, email, password, description, image_url, id];
    const inserts = [table, ...values];
    sql = db.mysql.format(sql, inserts);

    db.executeQuery(sql)
        .then(result => {
            res.status(200).send({ changedRows: result.changedRows });
        })
});

module.exports = router
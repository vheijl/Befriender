require("dotenv").config();
const express = require("express");
const cors = require("cors");

const userRoute    = require("./routes/user.router");
const friendRoute  = require("./routes/friend.route");
const searchRoute  = require("./routes/search.router");
const messageRoute = require("./routes/message.route");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

app.use('/api/user', userRoute);
app.use('/api/friend', friendRoute);
app.use('/api/search', searchRoute);
app.use('/api/message', messageRoute);

//============= Ping... pong =============//

app.get("/api/ping", (req, res) => {
    res.status(200).send({message: "pong"});
});
 
//============= User =============//

// app.post("/api/user/login", (req, res) => {
//     // Login a user

//     const { email, password } = req.body;

//     let sql = "SELECT id FROM ?? WHERE email = ? AND password = ?";
//     const table = "user";
//     const values = [email, password];
//     const inserts = [table, ...values];
//     sql = db.mysql.format(sql, inserts);

//     db.executeQuery(sql)
//         .then(result => {
//             // Deconstruct the id object from the result array.
//             const [{id}] = result;
//             res.status(200).send({id})
//         });
// });

// app.post("/api/user/register", (req, res) => {
//     // Register / create a user

//     const { username, email, password, description, image_url } = req.body;

//     let sql = "INSERT INTO ?? (??) VALUES(?)";
//     const table = "user";
//     const columns = ["username", "email", "password", "description", "image_url"];
//     const values =  [username, email, password, description, image_url];
//     const inserts = [table, columns, values];
//     sql = db.mysql.format(sql, inserts);

//     // Check that lengths are good
//     // if not return bad request 400

//     db.executeQuery(sql)
//         .then(result => {
//             // return the inserted userId to save in sessionStorage
//             res.status(200).send({id: result.insertId});
//         })
// });

// app.put("/api/user/update", (req, res) => {
//     // Update a users info

//     const { id, username, email, password, description, image_url } = req.body;

//     let sql = "Update ?? SET username=?, email=?, password=?, description=?, image_url=? WHERE id = ?";
//     const table = "user";
//     const values = [username, email, password, description, image_url, id];
//     const inserts = [table, ...values];
//     sql = db.mysql.format(sql, inserts);

//     db.executeQuery(sql)
//         .then(result => {
//             res.status(200).send({changedRows: result.changedRows});
//         })

//     // res.status(200).send({message: "Not yet implemented"});
// })

//============= Friends =============//

// app.post("/api/friend/add", (req, res) => {
//     // Add a friend

//     const { friend1, friend2 } = req.body;

//     let sql = "INSERT INTO ?? (??) VALUES (?)";
//     const table = "friends";
//     const columns = ["friend1", "friend2"];
//     const values = [friend1, friend2];
//     const inserts = [table, columns, values];
//     sql = db.mysql.format(sql, inserts);

//     db.executeQuery(sql)
//         .then(result => {
//             res.status(200).send({message: "Friend added"});
//         })
// });

// app.get("/api/friend/checkMatch/:f1/:f2", (req, res) => {
//     // Check if the friendship is symmetrical, ie. both friends have added each other

//     res.status(200).send({message: "Not yet implemented"});
// });

// app.get("/api/friend/all/:userId", (req, res) => {
//     // Get all friends for a provided user
//     const userId = req.params.userId;

//     // userId = logged in user, get all users who are their friend.

//     res.status(200).send({message: "Not yet implemented"});
// });

// app.get("/api/friend/getRequests/:userId", (req, res) => {
//     // Get all friend requests for a provided user

//     // For a provided user, get all their incoming friend requests

//     res.status(200).send({message: "Not yet implemented"});
// });

// app.delete("/api/friend/removeRequest", (req, res) => {
//     // Remove a specified friend request
//     const { friend1, friend2 } = req.body;
//     // Remove a friend 'request' from the friends table.

//     res.status(200).send({message: "Not yet implemented"});
// });

// //============= Messages =============//

// app.post("/api/message/post", (req, res) => {
//     // Post message to a provided user.
//     const { from_id, to_id, type } = req.body;

//     db.executeQuery("SELECT * FROM User")
//         .then(result => {
//             console.log(result);
//         });

//     res.status(200).send({message: "Not yet implemented"});
// });

// app.get("/api/message/all/:userId", (req, res) => {
//     // Get all messages for a provided user
//     res.status(200).send({message: "Not yet implemented"});
// });

// //============= Search =============//

// app.get("/api/search/:keyword", (req, res) => {
//     // Search friends descriptions for a keyword
//     //console.log(req.params.keyword);
//     res.status(200).send({message: "Not yet implemented"});
// });


app.listen(PORT, () => console.log(`Server started on port ${PORT}`))

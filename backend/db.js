const mysql = require("mysql");

const executeQuery = (sqlQuery) => {

    console.log(sqlQuery);

    let conn = mysql.createConnection({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE
    });

    return new Promise((resolve) => {
        conn.query(sqlQuery, (err, res) => {
            if (err) throw err.message + err;
            resolve(res);
        });
        conn.end();
        return resolve;
    })
}

module.exports = { executeQuery, mysql };
const db = require('mysql2');

const pool = db.createPool({
    host: process.env.LOCAL_DB,
    user: process.env.USER_DB,
    password: process.env.PASSWORD_DB,
    database: process.env.DATABASE
});

module.exports = pool.promise();
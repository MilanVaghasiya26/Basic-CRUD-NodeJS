const { Client } = require('pg');
const client = new Client( {
    user: 'postgres',
    host: 'localhost',
    database: 'crud-db',
    password: 'Password@123',
    port: 5432,
});

client.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

module.exports = client;
const client = require("../db/db.js");

exports.create = async (req, res) => {

        const {name, status, age} = req.body; 
    
        const response = await client.query(`insert into user1 (name, status, age) values ($1,$2,$3)`,[name, status, age] );
        
        res.status(200).send(response.rows);
};

exports.findAll = async (req, res) => {
    const response = await client.query(`select * from user1`);
    res.status(200).send(response.rows);    
};

exports.findOne = async (req, res) => {
    const id = req.params.id;
    const response = await client.query(`select * from user1 where id=${id}`);
    res.status(200).send(response.rows); 
};

exports.update = async (req, res) => {
    const id = req.params.id;
    const {name, status, age} = req.body;
    const response = client.query(`update user1 set name = $1, status = $2, age = $3 where id=${id}`, [name, status, age]);
    res.status(200).send(response.rows);
};

exports.delete = async (req, res) => {
    const id = req.params.id;

    const response = client.query(`delete from user1 where id=${id}`)
    res.status(200).send(response.rows);
};
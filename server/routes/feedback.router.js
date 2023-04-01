const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// GET route
router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "feedback";`;

    pool.query(queryText).then(result => {
        console.log('recieved rows from db');
        res.send(result.rows);
    }).catch(err => {
        console.log(err);
    })
})

// POST route
router.post('/', (req, res) => {
    const queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);`;
    const values = [req.body.feeling, req.body.understanding, req.body.support, req.body.comments];

    pool.query(queryText, values).then(result => {
        console.log('posted row to db');
        res.sendStatus(201);
    }).catch(err => {
        console.log(err);
        res.sendStatus(500);
    })

})


module.exports = router;
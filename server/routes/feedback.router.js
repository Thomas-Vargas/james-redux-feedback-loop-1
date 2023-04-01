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


module.exports = router;
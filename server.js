require('dotenv').config();
const express = require("express");
const cors = require('cors');
const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

app.listen(5000, () => {
    console.log("server has started on port 5000");
})

app.get('/', async (req, res) => {
    try {
        const results = await db.query('SELECT * FROM test_user_data;');
        res.status(200).json({
            status: 'success',
            results: results.rows.length,
            data: {
                rows_from_database: results.rows
            },
    });
    } catch (err) {
        console.log(err);
    }    
});
require('dotenv').config();
const express = require("express");
const cors = require('cors');
const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

app.get('/test', async (req, res) => {
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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server has started on port ${PORT}`);
})
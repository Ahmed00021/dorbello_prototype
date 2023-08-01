const { Pool } = require('pg');
 
const connectionString = "postgresql://postgres:uObStCk0t8nI4O65jYEJ@containers-us-west-60.railway.app:7390/railway"

const pool = new Pool({
    connectionString,
});
 
module.exports = {
    query: (text, params) => pool.query(text, params),
};
// module.exports = pool;

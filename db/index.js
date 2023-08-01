const { Pool } = require('pg');
 
const connectionString = "PGPASSWORD=uObStCk0t8nI4O65jYEJ psql -h containers-us-west-60.railway.app -U postgres -p 7390 -d railway"

const pool = new Pool({
    connectionString,
});
 
// module.exports = {
//     query: (text, params) => pool.query(text, params),
// };
module.exports = pool;

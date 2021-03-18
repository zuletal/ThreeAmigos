require("dotenv").config();

const pg = require("pg");

pg.defaults.ssl = true;
connectionString =
    process.env.DATABASE_URL 
console.log('connectionString ', connectionString)
const pool = new pg.Pool({
    max: 50,
    ssl: { rejectUnauthorized: false },
    connectionString: connectionString,
});
module.exports = pool;
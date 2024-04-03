const dotEnv = require('dotenv');
const config = dotEnv.config();

module.exports = {
    mongodb: {
        hostname: process.env.DB_HOST,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database_name: process.env.DB_NAME
    }
}
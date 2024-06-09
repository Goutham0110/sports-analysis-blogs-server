require('dotenv').config();

const configs = {
    PORT: process.env.PORT ||  4000,
    MONGODB_CONNECTION_URL: process.env.MONGODB_CONNECTION_URL || "mongodb://localhost:27017/test"
}

export default configs;
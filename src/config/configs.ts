require('dotenv').config();

const configs = {
    PORT: process.env.PORT ||  4000,
    MONGODB_CONNECTION_URL: process.env.MONGODB_CONNECTION_URL || "mongodb://localhost:27017/test",
    NOTIFICATION_EMAIL: process.env.NOTIFICATION_EMAIL || "",
    NOTIFICATION_EMAIL_PASSWORD: process.env.NOTIFICATION_EMAIL_PASSWORD || "",
    NOTIFICATION_EMAIL_SERVICE: process.env.NOTIFICATION_EMAIL_SERVICE || "gmail",
    AUTHOR_EMAIL : process.env.AUTHOR_EMAIL || ""
}

export default configs;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const configs = {
    PORT: process.env.PORT || 4000,
    MONGODB_CONNECTION_URL: process.env.MONGODB_CONNECTION_URL || "mongodb://localhost:27017/test",
    NOTIFICATION_EMAIL: process.env.NOTIFICATION_EMAIL || "goutham.ec20@bitsathy.ac.in",
    NOTIFICATION_EMAIL_PASSWORD: process.env.NOTIFICATION_EMAIL_PASSWORD || "Goutham@01",
    NOTIFICATION_EMAIL_SERVICE: process.env.NOTIFICATION_EMAIL_SERVICE || "gmail"
};
exports.default = configs;

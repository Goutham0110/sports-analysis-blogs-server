"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const http_status_1 = __importDefault(require("http-status"));
const blogs_1 = __importDefault(require("./blogs"));
const subscribers_1 = __importDefault(require("./subscribers"));
const router = (0, express_1.Router)();
router.all('/health-check', (req, res) => {
    return res.status(http_status_1.default.OK).json({
        message: "Server alive and running"
    });
});
router.use(subscribers_1.default);
router.use('/blogs', blogs_1.default);
exports.default = router;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const blogSchema = new Schema({
    title: { type: String, unique: true, required: true },
    author: String,
    description: String,
    file: { type: String, unique: true, required: true },
    featured: Boolean,
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});
const subscriberSchema = new Schema({
    email: { type: String, unique: true, required: true },
    deleted_at: Date,
}, {
    timestamps: {
        createdAt: 'created_at'
    }
});
const apiLogsSchema = new Schema({
    endpoint: { type: String, required: true }
}, {
    timestamps: {
        createdAt: 'created_at'
    }
});
const Models = {
    Blog: mongoose_1.default.model('Blog', blogSchema),
    Subscriber: mongoose_1.default.model('Subscriber', subscriberSchema),
    ApiLog: mongoose_1.default.model('ApiLog', apiLogsSchema)
};
exports.default = Models;

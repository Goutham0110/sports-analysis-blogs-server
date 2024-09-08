"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogsController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const error_handler_1 = require("../utils/error-handler");
const models_1 = __importDefault(require("../models"));
class BlogsController {
    constructor() {
        this.getBlogList = (req, res) => __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c;
            try {
                if ((_a = req === null || req === void 0 ? void 0 : req.query) === null || _a === void 0 ? void 0 : _a.title) {
                    const blogDetails = yield models_1.default.Blog.findOne({ title: req.query.title }).exec();
                    return res.status(http_status_1.default.OK).json(blogDetails);
                }
                else {
                    const page = parseInt((_b = req === null || req === void 0 ? void 0 : req.query) === null || _b === void 0 ? void 0 : _b.page);
                    if (!((_c = req === null || req === void 0 ? void 0 : req.query) === null || _c === void 0 ? void 0 : _c.page) || page <= 0) {
                        return res.status(http_status_1.default.BAD_REQUEST).json({
                            message: "page must be a valid number"
                        });
                    }
                    const offset = (page - 1) * 10;
                    const blogList = yield models_1.default.Blog.find().sort({ created_at: 'desc' }).skip(offset).limit(10).exec();
                    return res.status(http_status_1.default.OK).json(blogList);
                }
            }
            catch (err) {
                (0, error_handler_1.handleError)(req, res, err);
            }
        });
        this.getFeaturedBlogList = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const featuredBlogs = yield models_1.default.Blog.find({ featured: true }).sort({ created_at: 'desc' }).limit(3).exec();
                const latestBlogs = yield models_1.default.Blog.find().sort({ created_at: 'desc' }).limit(3).exec();
                return res.status(http_status_1.default.OK).json({
                    featured: featuredBlogs,
                    latest: latestBlogs
                });
            }
            catch (err) {
                (0, error_handler_1.handleError)(req, res, err);
            }
        });
        this.postBlog = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                try {
                    yield models_1.default.Blog.create(req.body);
                }
                catch (err) {
                    return res.status(http_status_1.default.BAD_REQUEST).json({
                        message: "Unable to create blog",
                        error: err.message
                    });
                }
                return res.status(http_status_1.default.OK).json({
                    message: "Blog posted successfully"
                });
            }
            catch (err) {
                (0, error_handler_1.handleError)(req, res, err);
            }
        });
        this.updateBlog = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                return res.status(http_status_1.default.NOT_IMPLEMENTED).json({
                    message: "Blog cannot be updated"
                });
            }
            catch (err) {
                (0, error_handler_1.handleError)(req, res, err);
            }
        });
        this.deleteBlog = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                try {
                    yield models_1.default.Blog.deleteOne({ name: req.body.name });
                }
                catch (err) {
                    return res.status(http_status_1.default.BAD_REQUEST).json({
                        message: "Unable to create blog",
                        error: err.message
                    });
                }
                return res.status(http_status_1.default.OK).json({
                    message: "Blog deleted successfully"
                });
            }
            catch (err) {
                (0, error_handler_1.handleError)(req, res, err);
            }
        });
    }
}
exports.BlogsController = BlogsController;

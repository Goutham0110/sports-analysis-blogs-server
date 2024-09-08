"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleError = void 0;
const http_status_1 = __importDefault(require("http-status"));
const logger_1 = __importDefault(require("./logger"));
function handleError(req, res, err) {
    (0, logger_1.default)("\n\n======================================== Internal Server Error ========================================");
    (0, logger_1.default)(err);
    return res.status(http_status_1.default.INTERNAL_SERVER_ERROR).json({
        message: "Internal Server Error"
    });
}
exports.handleError = handleError;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const connect_mongodb_1 = __importDefault(require("./src/utils/connect-mongodb"));
const configs_1 = __importDefault(require("./src/config/configs"));
const routers_1 = __importDefault(require("./src/routers"));
(0, connect_mongodb_1.default)();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use('/api', routers_1.default);
app.listen(configs_1.default.PORT, () => {
    console.log("Server alive and running at port", configs_1.default.PORT);
});

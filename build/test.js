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
const connect_mongodb_1 = __importDefault(require("./src/utils/connect-mongodb"));
const models_1 = __importDefault(require("./src/models"));
(0, connect_mongodb_1.default)();
const main = (() => __awaiter(void 0, void 0, void 0, function* () {
    const blogData = {
        title: "Dummy1",
        author: "Tony stark",
        description: "Genius, Billionaire, Playboy, Philosopher now becomes Doctor. Doctor Von Doom!",
        file: "example.com",
        featured: true,
    };
    yield models_1.default.Blog.create({ blogData });
}))();

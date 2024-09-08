"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const luxon_1 = require("luxon");
function logger(...logMessages) {
    try {
        logMessages.forEach((message) => {
            var _a;
            console.log((_a = luxon_1.DateTime === null || luxon_1.DateTime === void 0 ? void 0 : luxon_1.DateTime.now()) === null || _a === void 0 ? void 0 : _a.toFormat('[ yyyy-LL-dd HH:mm:ss ]  '), message);
        });
    }
    catch (err) {
        console.log(logMessages);
        console.log(err);
    }
}
exports.default = logger;

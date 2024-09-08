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
const configs_1 = __importDefault(require("../config/configs"));
const models_1 = __importDefault(require("../models"));
const logger_1 = __importDefault(require("./logger"));
const nodemailer_1 = __importDefault(require("nodemailer"));
function sendNewPostEmail(newPost, subscriber) {
    return __awaiter(this, void 0, void 0, function* () {
        const transporter = nodemailer_1.default.createTransport({
            service: configs_1.default.NOTIFICATION_EMAIL_SERVICE,
            auth: {
                user: configs_1.default.NOTIFICATION_EMAIL,
                pass: configs_1.default.NOTIFICATION_EMAIL_PASSWORD
            }
        });
        const mailOptions = {
            from: configs_1.default.NOTIFICATION_EMAIL,
            to: subscriber.email,
            subject: `New post alert - ${newPost.title}`,
            text: 'New Post'
        };
        transporter.sendMail(mailOptions, (err, res) => {
            if (err) {
                (0, logger_1.default)("Error in sending eMail", err);
            }
            else {
                (0, logger_1.default)(`Successfully sent eMail to ${mailOptions.to}`);
            }
        });
    });
}
function sendNewPostEmailToAll(newPost) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const emailProcess = [];
            const subscriberList = yield models_1.default.Subscriber.find();
            subscriberList.forEach((subscriber) => {
                const emailTask = sendNewPostEmail(newPost, subscriber);
                emailProcess.push(emailTask);
            });
            yield Promise.all(emailProcess);
        }
        catch (err) {
            (0, logger_1.default)(err.name, err.message);
        }
    });
}
exports.default = sendNewPostEmailToAll;
;

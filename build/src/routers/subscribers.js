"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const subscribers_1 = require("../controllers/subscribers");
const subscriberRouter = (0, express_1.Router)();
const subscriberController = new subscribers_1.SubscriberController();
subscriberRouter.post('/subscribe', subscriberController.addSubscriber);
subscriberRouter.delete('/unsubscribe', subscriberController.removeSubscriber);
subscriberRouter.post('/mail', subscriberController.sendMail);
exports.default = subscriberRouter;

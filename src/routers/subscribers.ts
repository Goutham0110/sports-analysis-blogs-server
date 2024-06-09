import { Router } from "express";
import { SubscriberController } from "../controllers/subscribers";

const subscriberRouter = Router();
const subscriberController = new SubscriberController();

subscriberRouter.post('/subscribe', subscriberController.addSubscriber);
subscriberRouter.delete('/unsubscribe', subscriberController.removeSubscriber);
subscriberRouter.post('/mail', subscriberController.sendMail);

export default subscriberRouter;
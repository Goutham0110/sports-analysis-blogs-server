import { Router } from "express";
import { SubscriberController } from "../controllers/subscribers";

const subscriberRouter = Router();
const subscriberController = new SubscriberController();

subscriberRouter.get('/subscribers', subscriberController.getSubscribersList);
subscriberRouter.post('/subscribe', subscriberController.addSubscriber);
subscriberRouter.delete('/unsubscribe', subscriberController.removeSubscriber);
subscriberRouter.post('/mail', subscriberController.sendMail);

export default subscriberRouter;
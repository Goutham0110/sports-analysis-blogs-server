import { Request, Response } from "express";
import httpStatus from "http-status";
import { handleError } from "../utils/error-handler";
import Models from "../models";
import email from "../utils/email"
import configs from "../config/configs";

export class SubscriberController {


    /**
     * All subscribers are paginated and displayed 
     * @param req 
     * @param res 
     * @returns 
     */
    getSubscribersList = async (req: Request, res: Response) => {
        try {
            const page = parseInt(<string>req?.query?.page);
            if (!req?.query?.page || page <= 0) {
                return res.status(httpStatus.BAD_REQUEST).json({
                    message: "page must be a valid number"
                });
            }
            const offset: number = (page - 1) * 10;
            const subscribersList: any = await Models.Subscriber.find().sort({ created_at: 'desc' }).skip(offset).limit(10).exec();
            return res.status(httpStatus.OK).json(subscribersList);
        } catch (err: any) {
            handleError(req, res, err);
        }
    }

    /**
     * Adds a subscriber to send newsletters and updates  
     * @param req 
     * @param res 
     * 
     */
    addSubscriber = async (req: Request, res: Response) => {
        try {
            const isSubscriptionExists = await Models.Subscriber.findOne({ email: req.body.email });
            if (isSubscriptionExists) {
                return res.status(httpStatus.OK).json({
                    message: "Already subscribed",
                });
            }
            await Models.Subscriber.create({ email: req.body.email });
            return res.status(httpStatus.OK).json({
                message: "Subscribed successfully"
            });
        } catch (err) {
            handleError(req, res, err);
        }
    }


    /**
     * Removes a mail ID from subscribers list  
     * @param req 
     * @param res 
     * 
     */
    removeSubscriber = async (req: Request, res: Response) => {
        try {
            const isSubscriptionExists = await Models.Subscriber.findOne({ email: req.body.email });
            if (!isSubscriptionExists) {
                return res.status(httpStatus.BAD_REQUEST).json({
                    message: "Already Unsubscribed",
                });
            }
            await Models.Subscriber.deleteOne({ email: req.body.email });
            return res.status(httpStatus.OK).json({
                message: "Unsubscribed successfully"
            });
        } catch (err) {
            handleError(req, res, err);
        }
    }


    /**
     * Send a reach out mail and add to subscribers list
     * @param req 
     * @param res 
     * 
     */
    sendMail = async (req: Request, res: Response) => {
        
        try {
            await Models.Subscriber.create({ email: req.body.email });
        } catch (err) { }

        email.sendEmail({
            to: configs.AUTHOR_EMAIL,
            subject: "Message from a reader",
            text: req.body?.message
        });
        try {
            return res.status(httpStatus.OK).json({
                message: "Email sent successfully"
            });
        } catch (err) {
            handleError(req, res, err);
        }
    }

}
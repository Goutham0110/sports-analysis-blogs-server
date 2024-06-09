import { Request, Response } from "express";
import httpStatus from "http-status";
import { handleError } from "./error-handler";

export class SubscriberController {


    /**
     * Adds a subscriber to send newsletters and updates  
     * @param req 
     * @param res 
     * 
     */
    addSubscriber = async (req: Request, res: Response) => {
        try {
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
            throw Error("bla bla")
            return res.status(httpStatus.OK).json({
                message: "Email sent successfully"
            });
        } catch (err) {
            handleError(req, res, err);
        }
    }

}
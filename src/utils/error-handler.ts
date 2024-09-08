import { Request, Response } from "express";
import httpStatus from "http-status";
import logger from "./logger";

export function handleError(req: Request, res: Response, err: any) {
    logger("\n\n======================================== Internal Server Error ========================================");
    logger(err);
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        message: "Internal Server Error"
    })
}
import { Request, Response } from "express";
import httpStatus from "http-status";

export function handleError(req: Request, res: Response, err: any) {
    console.log("\n\n======================================== Error ========================================");
    console.log(err);
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        message: "Internal Server Error"
    })
}
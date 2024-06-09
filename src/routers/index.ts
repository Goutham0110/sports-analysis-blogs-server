import { Router } from "express";
import httpStatus from "http-status";
import blogsRouter from "./blogs";
import subscriberRouter from "./subscribers";

const router = Router();

/**
 * Public Routes
 */

router.all('/health-check', (req, res) => {
    return res.status(httpStatus.OK).json({
        message: "Server alive and running"
    })
});

router.use(subscriberRouter);
router.use('/blogs', blogsRouter);

export default router;
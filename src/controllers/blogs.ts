import { Request, Response } from "express";
import httpStatus from "http-status";
import { handleError } from "../utils/error-handler";
import Models from "../models";
import email from "../utils/email";

export class BlogsController {

    /**
     * If id is mentioned in query params details of single blog is displayed, else all blogs are paginated and displayed 
     * @param req 
     * @param res 
     * @returns { blogs: [blog_list] }
     * 
     */
    getBlogList = async (req: Request, res: Response) => {
        try {
            if (req?.query?.title) {
                const blogDetails = await Models.Blog.findOne({ title: req.query.title }).exec();
                return res.status(httpStatus.OK).json(blogDetails);
            } else {
                const page = parseInt(<string>req?.query?.page);
                if (!req?.query?.page || page <= 0) {
                    return res.status(httpStatus.BAD_REQUEST).json({
                        message: "page must be a valid number"
                    });
                }
                const offset: number = (page - 1) * 10;
                const blogList: any = await Models.Blog.find().sort({ created_at: 'desc' }).skip(offset).limit(10).exec();
                const totalBlogs: any = await Models.Blog.countDocuments();
                return res.status(httpStatus.OK).json({
                    blogs: blogList,
                    count: totalBlogs
                });
            }
        } catch (err: any) {
            handleError(req, res, err);
        }
    }


    /**
     * 
     * @param req 
     * @param res 
     * @returns { latest: [latest_blogs], featured: [featured_blogs] }
     * 
     */
    getFeaturedBlogList = async (req: Request, res: Response) => {
        try {
            const featuredBlogs = await Models.Blog.find({ featured: true }).sort({ created_at: 'desc' }).limit(3).exec();
            const latestBlogs = await Models.Blog.find().sort({ created_at: 'desc' }).limit(3).exec();

            return res.status(httpStatus.OK).json({
                featured: featuredBlogs,
                latest: latestBlogs
            });
        } catch (err: any) {
            handleError(req, res, err);
        }
    }


    /**
     * 
     * Creates a blog post and adds it to featured and latest based on the tags provided.
     * Sends a notification mail to all subscribers
     * @param req 
     * @param res 
     * 
     */
    postBlog = async (req: Request, res: Response) => {
        try {
            const isBlogExists = await Models.Blog.findOne({ title: req.body.title });
            if (isBlogExists) {
                return res.status(httpStatus.BAD_REQUEST).json({
                    message: "Blog with this title already exists",
                });
            }
            await Models.Blog.create(req.body);
            email.sendNewPostEmailToAll(req.body);
            return res.status(httpStatus.OK).json({
                message: "Blog posted successfully"
            });
        } catch (err) {
            handleError(req, res, err);
        }
    }


    /**
     * 
     * Updates a blog post and adds it to featured and latest based on the tags provided
     * @param req 
     * @param res 
     * 
     */
    updateBlog = async (req: Request, res: Response) => {
        try {
            return res.status(httpStatus.NOT_IMPLEMENTED).json({
                message: "Blog cannot be updated"
            });
        } catch (err) {
            handleError(req, res, err);
        }
    }


    /**
     * 
     * Deletes a blog post
     * @param req 
     * @param res 
     * 
     */
    deleteBlog = async (req: Request, res: Response) => {
        try {
            await Models.Blog.deleteOne({ title: req.body.title });
            return res.status(httpStatus.OK).json({
                message: "Blog deleted successfully"
            });
        } catch (err) {
            handleError(req, res, err);
        }
    }
}
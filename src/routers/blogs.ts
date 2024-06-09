import { Router } from "express";
import { BlogsController } from "../controllers/blogs";

const blogsRouter = Router();
const blogsController = new BlogsController();

blogsRouter.get('/', blogsController.getBlogList);
blogsRouter.post('/', blogsController.postBlog);
blogsRouter.put('/', blogsController.updateBlog);
blogsRouter.delete('/', blogsController.deleteBlog);
blogsRouter.get('/latest-and-featured', blogsController.getFeaturedBlogList);

export default blogsRouter;
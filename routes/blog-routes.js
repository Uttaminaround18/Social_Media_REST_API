import express from "express";
import { addBlog, getAllBlogs, updateBlogs } from "../controllers/blog-controllers";
const blog_router = express.Router();

blog_router.get("/", getAllBlogs);
blog_router.post("/add", addBlog);
blog_router.put("/update/:id", updateBlogs);

export default blog_router;


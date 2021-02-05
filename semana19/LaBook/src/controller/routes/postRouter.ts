import express from "express";
import { createPost, getAllPosts } from "../postController";

export const postRouter = express.Router();

postRouter.post("/create", createPost);
postRouter.get("/:id", getAllPosts);

import { Router } from "express";
const router = Router();

import * as middleware from "../middlewares/verifyToken.js";
import * as postController from "../controllers/post.controllers.js";

// Create post
router.post("/", middleware.verifyToken, postController.createPost);
// Update post
router.put("/:id", middleware.verifyToken, postController.updatePost);
// Delete post
router.delete("/:id", middleware.verifyToken, postController.deletePost);
// Get post by id
router.get("/:id", postController.getPostById);
// Get all posts
router.get("/", postController.getAllposts);

export default router;

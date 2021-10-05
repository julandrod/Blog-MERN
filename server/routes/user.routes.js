import { Router } from "express";
const router = Router();

import * as userController from "../controllers/user.controllers.js";
import * as middleware from "../middlewares/verifyToken.js";

// Update user by id
router.put("/:id", middleware.verifyToken, userController.updateUserById);
// Delete user by id
router.delete("/:id", middleware.verifyToken, userController.deleteUserById);
// Get user by id
router.get("/:id", middleware.verifyToken, userController.getUserById);

export default router;

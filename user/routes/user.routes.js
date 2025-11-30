import { Router } from "express";
import { userController } from "../controllers/user.controller.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = Router();

router.post("/register", userController.registerUser);
router.post("/login", userController.login);
router.post("/logout", userController.logout);
router.get("/profile", authMiddleware.userAuth, userController.profile);
router.get(
  "/accepted-ride",
  authMiddleware.userAuth,
  userController.acceptedRide
);

export default router;

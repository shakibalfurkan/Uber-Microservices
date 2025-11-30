import { Router } from "express";
import { captainController } from "../controllers/captain.controller.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = Router();

router.post("/register", captainController.register);
router.post("/login", captainController.login);
router.post("/logout", captainController.logout);
router.get("/profile", authMiddleware.captainAuth, captainController.profile);
router.patch(
  "/toggle-availability",
  authMiddleware.captainAuth,
  captainController.toggleAvailability
);

export default router;

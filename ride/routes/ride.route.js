import { Router } from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { rideController } from "../controllers/ride.controller.js";
const router = Router();

router.post("/create-ride", authMiddleware.userAuth, rideController.createRide);
router.put(
  "/accept-ride",
  authMiddleware.captainAuth,
  rideController.acceptRide
);

const rideRoutes = router;
export default rideRoutes;

import { getAllBookings } from "../controllers/bookingControllers";

import { Router } from "express";
import { protect, admin } from "../middlewares/authMiddleware";

const router = Router();

router.get("/", protect, admin, getAllBookings);

export default router;

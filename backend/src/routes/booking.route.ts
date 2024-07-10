import { Router } from "express";
import { protect } from "../middlewares/authMiddleware";
import {
  createBooking,
  getAllBookings,
  getBookingById,
  getBookingsByUserId,
  updateBookingStatus,
  deleteBooking
} from "../controllers/bookingControllers";

const router = Router();

router.post("/", protect, createBooking);
router.get("/", protect, getAllBookings);
router.get("/:id", protect, getBookingById);
router.get("/user/:id", protect, getBookingsByUserId);
router.put("/:id", protect, updateBookingStatus);
router.delete("/:id", protect, deleteBooking);

export default router;

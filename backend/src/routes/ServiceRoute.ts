import {
  createService,
  deleteServiceById,
  getAllService,
  getServiceById,
  updateServiceById,
} from "../controllers/ServiceControlls";

import { Router } from "express";
import { protect } from "../middlewares/authMiddleware";
import { admin } from "../middlewares/adminMiddleware";

const router = Router();

router.post("/", protect, admin, createService);
router.delete("/delete/:id", admin, deleteServiceById);
router.get("/services", protect, getAllService);
router.get("/services/:id", protect, getServiceById);
router.put("/update/:id", admin, updateServiceById);

export default router;

import { Router } from "express";
import { protect, admin } from "../middleware/authMiddleware";
import {
  createSpace,
  getAllSpaces,
  getSpaceById,
  updateSpace,
  deleteSpace
} from "../controllers/space.controller";

const router = Router();

router.post("/", protect, admin, createSpace);
router.get("/", getAllSpaces);
router.get("/:id", getSpaceById);
router.put("/:id", protect, admin, updateSpace);
router.delete("/:id", protect, admin, deleteSpace);

export default router;

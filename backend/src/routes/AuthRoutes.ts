import { Router } from "express";
import { protect } from "../middlewares/authMiddleware";
import { login,logout } from "../controllers/AuthControllers";

const router = Router()

router.post("/login",protect,login);
router.post("/logout",logout);

export default router
import { Router } from "express";
import { createuser, deleteuser, getusers, updateuser, userbyid } from "../controllers/UserControllers";

const router = Router()

router.post("/",createuser);
router.get("/",getusers);
router.get("/:id",userbyid);
router.delete("/:id",deleteuser);
router.put("/:id",updateuser);

export default router
import express from "express";
import { create, update, remove, view } from "../controller/education.controller.js";

const router = express.Router();

router.post("/create", create);
router.put("/update", update);
router.get("/view", view);
router.delete("/remove", remove);

export default router;
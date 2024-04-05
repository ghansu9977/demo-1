import express from "express";
import { create, update, view, remove } from "../controller/personal.controller.js";

const router = express.Router();

router.post("/create", create);
router.put("/update", update);
router.get("/view", view);
router.delete("/remove", remove);

export default router;

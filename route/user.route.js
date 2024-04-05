import express from "express";
import { singUp, signIn, update, userList, getUserByEmail, remove } from "../controller/user.controller.js";
import { body } from 'express-validator';

const router = express.Router();

router.post("/signup",
      body("email", "Invalid Email Id ").isEmail(),
      body("password", "Password is required").notEmpty(),
      body("password", "Password must have at least 5 characters").isLength({ min: 5 }),
      body("name", "Name is required").notEmpty(),
      body("name", "Only alphabets are allowed").isAlpha(),
      singUp);

router.post("/signin",
      body("email", "Invalid Email Id ").isEmail(),
      body("password", "Password is required").notEmpty()
      , signIn);

router.put("/update",
      body("email", "Invalid Email Id ").isEmail().optional(),
      body("password", "Password must have at least 5 characters").isLength({ min: 5 }).optional(),
      body("name", "Only alphabets are allowed").isAlpha().optional(),
      update);

router.get("/userList", userList);
router.get("/getUserByEmail", getUserByEmail);
router.delete("/remove", remove);

export default router;

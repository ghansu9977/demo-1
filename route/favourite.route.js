import express from 'express';
import { addToFavourite, viewFavourite, remove } from '../controller/favourite.controller.js';

const router = express.Router();

router.post("/addtocart", body('userId', "Invalid User id").notEmpty().isNumeric(),
      body('productId', "Invalid product id").notEmpty().isNumeric(), addToFavourite);
router.get("/list/:userId", viewFavourite);
router.delete("/remove", remove);

export default router;
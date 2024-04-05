import express from 'express';
import { getAllProfiles } from '../controller/allProfile.controller.js';

const router = express.Router();

// Route to get all profiles
router.get('/', getAllProfiles);

export default router;

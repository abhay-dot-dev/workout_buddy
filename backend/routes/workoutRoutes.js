import express from 'express';
import { getWorkouts } from '../controllers/workoutController.js';

const router = express.Router();

router.get('/', getWorkouts);

export default router;
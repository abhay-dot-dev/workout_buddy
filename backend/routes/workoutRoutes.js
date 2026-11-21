import express from 'express';
import { createWorkouts, getWorkouts } from '../controllers/workoutController.js';

const router = express.Router();

router.get('/', getWorkouts);
router.post('/', createWorkouts);

export default router;
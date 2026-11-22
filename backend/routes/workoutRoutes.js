import express from 'express';
import { createWorkouts, getWorkoutById, getWorkouts } from '../controllers/workoutController.js';

const router = express.Router();

router.get('/', getWorkouts);
router.post('/', createWorkouts);
router.get('/:id', getWorkoutById);

export default router;
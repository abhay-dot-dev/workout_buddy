import express from 'express';
import { createWorkouts, getWorkoutById, getWorkouts, updateWorkout } from '../controllers/workoutController.js';

const router = express.Router();

router.get('/', getWorkouts);
router.post('/', createWorkouts);
router.get('/:id', getWorkoutById);
router.patch('/:id', updateWorkout);

export default router;
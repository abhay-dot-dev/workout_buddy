import express from 'express';
import { createWorkouts, deleteWorkout, getWorkoutById, getWorkouts, updateWorkout } from '../controllers/workoutController.js';

const router = express.Router();

router.get('/', getWorkouts);
router.post('/', createWorkouts);
router.get('/:id', getWorkoutById);
router.patch('/:id', updateWorkout);
router.delete('/:id', deleteWorkout);

export default router;
import mongoose from 'mongoose';
import Workout from '../models/Workout.js';

export const getWorkouts = async (req, res) => {
    try {
        const workouts = await Workout.find().sort({ createdAt: -1 });

        if (workouts.length === 0) {
            return res.status(404).json({ message: 'No workouts found!' });
        }

        res.status(200).json({ message: 'Workouts fetched successfully!', workouts: workouts });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong!' });
    }
}

export const createWorkouts = async (req, res) => {
    const { title, load, reps } = req.body;

    if (!title || load === undefined || reps === undefined) {
        return res.status(400).json({ message: 'All the fields are mandatory!' })
    }

    try {
        const workout = await Workout.create({ title, load, reps });

        res.status(201).json({ message: 'Workout created succesfully!', workout });
    } catch (error) {
        if (error.name === 'ValidationError') {
            return res.status(400).json({ message: error.message });
        }
        console.error(error);
        res.status(500).json({ message: 'Something went wrong!' });
    }
}

export const getWorkoutById = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
        return res.status(400).json({ message: 'Invalid workout id!' })
    }

    try {
        const workout = await Workout.findById(id);

        if (!workout) {
            return res.status(404).json({ message: 'No workout found!' });
        }

        res.status(200).json({ message: 'Workout fetched successfully!', workout });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong!' })
    }
}
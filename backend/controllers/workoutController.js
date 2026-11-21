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
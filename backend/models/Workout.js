import mongoose from 'mongoose';

const workoutSchema = new mongoose.Schema({
    title: {
        trim: true,
        type: String,
        required: true,
        lowercase: true
    },
    load: {
        min: 0,
        type: Number,
        required: true
    },
    reps: {
        min: 1,
        type: Number,
        required: true
    }
}, { timestamps: true });

const Workout = mongoose.model('Workout', workoutSchema);

export default Workout;
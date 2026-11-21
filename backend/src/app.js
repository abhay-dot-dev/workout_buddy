import express from 'express';
import workoutRoutes from '../routes/workoutRoutes.js';

const app = express();

app.use(express.json());

app.use('/api/workouts', workoutRoutes);

// Home route
app.get('/', (req, res) => {
    res.status(200).json({message: "Hello, workout buddy!"});
});

export default app;
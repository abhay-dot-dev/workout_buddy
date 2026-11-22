import express from 'express';
import cors from 'cors';
import workoutRoutes from '../routes/workoutRoutes.js';

const app = express();

app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    methods: ['GET', 'POST', 'PATCH', 'DELETE']
}));

app.use(express.json());

app.use('/api/workouts', workoutRoutes);

// Home route
app.get('/', (req, res) => {
    res.status(200).json({message: "Hello, workout buddy!"});
});

export default app;
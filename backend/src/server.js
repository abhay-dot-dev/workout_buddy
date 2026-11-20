import 'dotenv/config';
import express from 'express';
import connectDB from '../config/db.js';

const app = express();

const PORT = process.env.PORT;

// Home route
app.get('/', (req, res) => {
    res.status(200).json({message: "Hello, workout buddy!"});
})

const startServer = async () => {
    try {
        await connectDB();
        app.listen(PORT, '0.0.0.0', () => {
            console.log(`Server is up and running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

startServer();
import 'dotenv/config';
import app from './app.js';
import express from 'express';
import connectDB from '../config/db.js';

const PORT = process.env.PORT;

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
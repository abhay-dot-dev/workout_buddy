import express from 'express';
import 'dotenv/config';

const app = express();

const PORT = process.env.PORT;

// Home route
app.get('/', (req, res) => {
    res.status(200).json({message: "Hello, workout buddy!"});
})

const startServer = () => {
    app.listen(PORT, '0.0.0.0', () => {
        console.log(`Server is up and running on http://localhost:${PORT}`);
    })
}

startServer();
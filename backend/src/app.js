import express from 'express';

const app = express();

app.use(express.json());

// Home route
app.get('/', (req, res) => {
    res.status(200).json({message: "Hello, workout buddy!"});
})

export default app;
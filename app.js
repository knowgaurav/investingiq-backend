import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import connectDB from './config/connectdb.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config();
const app = express()
const port = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;

//CORS policy
app.use(cors());

// Database Connect
connectDB(DATABASE_URL);

// JSON
app.use(express.json());

// Load Routes
app.use("/api/user", userRoutes);

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
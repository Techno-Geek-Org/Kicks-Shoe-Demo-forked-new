// src/app.ts
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { json, urlencoded } from 'body-parser';
import authRoutes from './routes/auth_routes';

dotenv.config();

const app = express();

// Middleware
app.use(json());
app.use(urlencoded({ extended: true }));

// Routes
app.use('/api/auth', authRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI || '', {
    // Omit deprecated options
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    if (err instanceof Error) {
        console.error('Failed to connect to MongoDB', err.message);
    } else {
        console.error('Unexpected error:', err);
    }
});

export default app;

// src/config/config.ts
import dotenv from 'dotenv';

dotenv.config();

export default {
    port: process.env.PORT || 5000,
    mongoURI: process.env.MONGO_URI || 'mongodb://localhost:27017/shoe-website',
    jwtSecret: process.env.JWT_SECRET || 'default_secret',
};

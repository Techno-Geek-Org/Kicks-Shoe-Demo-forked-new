// src/config/config.ts
import dotenv from 'dotenv';

dotenv.config();

export default {
    port: process.env.PORT || 6969,
    mongoURI: process.env.MONGO_URI || 'mongodb://localhost:27017/',
};

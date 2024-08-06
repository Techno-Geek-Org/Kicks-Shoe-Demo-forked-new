// src/server.ts
import app from './app'; // Import the app instance
import dotenv from 'dotenv';

dotenv.config();

// Set default values for hostname and port from environment variables or fallback to defaults
const hostName: string = process.env.HOSTNAME || 'localhost';
const portNumber: number = parseInt(process.env.PORT || '6969', 10);

// Start the server
app.listen(portNumber, hostName, () => {
    console.log(`Welcome to Express Server`);
    console.log(`Server is running at http://${hostName}:${portNumber}`);
});

const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const axios = require('axios');  // Import axios

const app = express();
app.use(cors());
const port = 8080;

const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: "*", // Allow all origins (change this to your client's domain in production)
        methods: ["GET", "POST"]
    }
});

function saveLogToDatabase(message) {
    axios.post('http://main.brazilsouth.cloudapp.azure.com:8000/log_server', {
        mensaje: message
    }).catch(error => {
        console.error("Error saving log to database:", error);
    });
}

io.on('connection', (socket) => {
    console.log('Client connected');
    saveLogToDatabase('Client connected'); // Save log to database

    // Listen for the notify-official event from the client
    socket.on('notify-official', (data) => {
        console.log('Notification received for official:', data);
        saveLogToDatabase(`Notification received for official: ${data}`); // Save log to database

        // Broadcast the notification to all connected clients
        io.emit('official-notification', data);
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected');
        saveLogToDatabase('Client disconnected'); // Save log to database
    });
});

server.listen(port, () => {
    saveLogToDatabase(`Servidor corriendo en http://localhost:${port}`); // Save log to database
    console.log(`Servidor corriendo en http://localhost:${port}`);
});

module.exports = server;
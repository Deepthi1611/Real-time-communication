const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 3000 });
server.on('connection', (socket) => { 
    console.log('Client connected');
    socket.send('Web socket')

    socket.on('message', (message) => {
        console.log(`Received: ${message}`);
        socket.send('Hello from server');
    });
 })

console.log('WebSocket server is running on ws://localhost:3000');

// FE - browser's console
// const socket = new WebSocket('ws://localhost:3000');
// Register an event listener BEFORE sending anything
// socket.onmessage = (event) => {
//     console.log(`Message from server: ${event.data}`);
// }
// Send message to the server
// socket.send('Hello from client');
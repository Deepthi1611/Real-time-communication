const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/poll') {
        setTimeout(() => {
            res.writeHead(200, {'Content-Type': 'application/json'})
            res.end(JSON.stringify({ message: `Hello at ${new Date().toISOString()}` }))
        }
        , 3000) // Simulate a delay of 3 seconds
    } else {
        res.writeHead(200)
        res.end('Server is Up')
    }
})

server.listen(3000, () => {
    console.log('Server is running on 3000')
})

// node longPolling.js - to start the server
// curl http://localhost:3000/poll - to hit the long-polling endpoint
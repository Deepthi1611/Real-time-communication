const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/events') {
        // Here headers like content-type which says this is streaming event - server always sends events
        // and connection - keep-alive - this is a long-lived connection are important
        res.writeHead(200, {
            'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive'
        })

        const intervalId = setInterval(() => {
            res.write(`data: ${JSON.stringify({ message: `Hello at ${new Date().toISOString()}` })}\n\n`)
        }, 2000) // Send an event every 2 seconds

        req.on('close', () => {
            clearInterval(intervalId)
            res.end()
        })
    }
    else {
        res.writeHead(200)
        res.end('Server is Up')
    }
})

server.listen(3000, () => {
    console.log('Server is running on 3000')
}
)

// node serverEvents.js - to start the server
// curl http://localhost:3000/events - to hit the server-sent events endpoint
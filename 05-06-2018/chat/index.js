// Import clusterws
const ClusterWS = require('clusterws')
const express = require('express')

// Configure ClusterWS
const clusterws = new ClusterWS({
    worker: Worker, // Worker function must be provided
    // All other configurations can be found at bottom of the page
    port: 9999
})

// Worker function with all your server logic
function Worker() {
    // Get websocket server
    const wss = this.wss
    // Get http/https server
    const server = this.server

    // Use your library/framework as you usually do
    const app = express()
    app.use(express.static('./public'));

    // Connect ClusterWS and your library/framework
    server.on('request', app)

    // Listen on connections to websocket server
    wss.on('connection', (socket) => {
      socket.on('message', (data) => {
        console.log('got message on server', data);
        console.log('sending message...');
        socket.send('message', data)
      })
    })
}

// Import clusterws
const ClusterWS = require('clusterws');
const express = require('express');
const morgan = require('morgan');

// Configure ClusterWS
const clusterws = new ClusterWS({
  worker: Worker, // Worker function must be provided
  // All other configurations can be found at bottom of the page
  port: process.env.PORT || 9999
});

// Worker function with all your server logic
function Worker() {
  // Get websocket server
  const wss = this.wss;
  // Get http/https server
  const server = this.server;

  // Use your library/framework as you usually do
  const app = express();
  app.use(morgan('tiny'));
  app.use(express.static('./public'));

  // Connect ClusterWS and your library/framework
  server.on('request', app);

  const connectedSockets = [];

  // Listen on connections to websocket server
  wss.on('connection', (socket) => {
    connectedSockets.push(socket);
    socket.on('message', (data) => {
      console.log('got message on server', data);
      console.log('sending message...');
      data.created = new Date();
      connectedSockets.forEach(connectedSocket => {          
        connectedSocket.send('message', data);
      });
    });

    socket.on('disconnect', (code, reason) => {
      const index = connectedSockets.indexOf(socket);
      connectedSockets.splice(index, 1);
    });
  });
}

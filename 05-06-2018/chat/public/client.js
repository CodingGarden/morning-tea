let socket = new ClusterWS({
    url: 'ws://localhost:9999'
})

socket.on('connect', () => {
  socket.send('message', {
    message: 'Hello World!'
  })
})

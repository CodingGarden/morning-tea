const form = document.querySelector('form');
const messageElement = document.querySelector('#message');
const messagesElement = document.querySelector('#messages');

let socket = new ClusterWS({
  url: 'ws://' + window.location.host
});

socket.on('connect', () => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);

    const data = {
      username: formData.get('username'),
      message: formData.get('message')
    };

    socket.send('message', data);
    messageElement.value = '';
  });

  socket.on('message', (data) => {
    console.log(data);
    
    const div = document.createElement('div');
    div.innerHTML = `
      <small>${data.username}</small>
      <p>${data.message}</p>
      <small>${data.created}</small>
    `
    messagesElement.appendChild(div);
  });
});

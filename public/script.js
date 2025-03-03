const socket = new WebSocket('ws://' + window.location.host);
const messagesList = document.getElementById('messages');

socket.onmessage = (event) => {
    const li = document.createElement('li');
    li.textContent = event.data;
    messagesList.appendChild(li);
};

function sendMessage() {
    const input = document.getElementById('messageInput');
    socket.send(input.value);
    input.value = '';
}

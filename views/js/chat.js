const socket = window.io();

const form = document.querySelector('form');
const inputMessage = document.querySelector('#messageIn');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    socket.emit('message', inputMessage.value);
    inputMessage.value = '';
    return false;
});

const createMessage = (message) => {
    const messagesUl = document.querySelector('#message');
    const li = document.createElement('li');
    li.innerText = message;
    messagesUl.appendChild(li);
};
  
socket.on('serverMessage', (message) => createMessage(message));
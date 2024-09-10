import { io } from "https://cdn.socket.io/4.7.5/socket.io.esm.min.js"; 

const socket = io('http://localhost:3000');

const chat__window = document.getElementById('chat__window');
const chat__message = document.getElementById('chat__message');
const send__button = document.getElementById('send__button');

// функция отправки сообщений в окно чата

function sendMessage (message) {
    const chat__message__text = message;
    const user_id = socket.id;

    if (chat__message__text.trim()) {
        const chat__message__element = document.createElement('div');

        chat__message__element.id = 'chat__message__element';
        chat__message__element.textContent = `${user_id}  ${chat__message__text}`;

        chat__window.appendChild(chat__message__element);

        chat__message.value = '';

        chat__window.scrollTop = chat__window.scrollHeight;
    }
}

// Обработка сообщений
socket.on('message', (message) => {  
    sendMessage(message);
});

// по клику

send__button.addEventListener('click', function() {
    const chat__message__text = document.getElementById('chat__message').value;

    socket.send(chat__message__text);
});

// по нажатию

chat__message.addEventListener('keydown', function (event) {
    if (event.key == 'Enter') {
        const chat__message__text = document.getElementById('chat__message').value;

        socket.send(chat__message__text);
    }
});



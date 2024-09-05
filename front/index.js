import { io } from "https://cdn.socket.io/4.7.5/socket.io.esm.min.js"; 

const socket = io('http://localhost:3000');

// Обработка сообщений
socket.on('message', (message) => {
    document.getElementById('chat__window').innerText = `- ${socket.id} ${message}`;
});

// Прослушка кнопки
document.getElementById('send__button').onclick = () => {
    const message = document.getElementById('chat__message').value;
    socket.send(message);
};


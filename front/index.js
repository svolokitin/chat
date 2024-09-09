import { io } from "https://cdn.socket.io/4.7.5/socket.io.esm.min.js"; 

const socket = io('http://localhost:3000');

// Обработка сообщений
socket.on('message', (message) => {
    const chat__window = document.getElementById('chat__window');
    let div = document.createElement('div');
    div.className = '#777';
    div.innerHTML = `<p>${message}</p>`;
    
});

// Прослушка кнопки

document.getElementById('send__button').onclick = () => {
    const message = document.getElementById('chat__message').value;

    document.getElementById('chat__window').innerText = message;
    socket.send(message);
}



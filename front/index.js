import io from '/socket.io/socket.io.js'; 

const socket = io();

// Обработка сообщений
socket.on('message', (message) => {
    document.getElementById('chat__window').innerText = `Response from server ${message}`;
});

// Прослушка кнопки
document.getElementById('send__button').onclick = () => {
    const message = document.getElementById('chat__message').value;
    socket.send(message);
}


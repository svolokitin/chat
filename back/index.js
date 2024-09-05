import express from 'express';
import cors from 'cors';
import connectDB from './dataBase/connect.js';
import router from './router.js';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST']
    }
});

const PORT = 3000; 

app.use(express.json());
app.use('/users', router);

io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    // Обработка получения сообщения от клиента
    socket.on('message', (msg) => {
        console.log('Message from client:', msg);

        // Отправка сообщения обратно всем подключенным клиентам
        io.emit('message', msg);
    });

    // Обработка отключения пользователя
    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
    });
});

async function startServer() {
    try {
        connectDB();
        server.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
    }
    catch (err) {
        return err.message;
    }
}

startServer();


export default io;
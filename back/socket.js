import { Server } from 'socket.io';

export function setupSocket(server) {
    const io = new Server(server);

    io.on('connection', (socket) => {
        console.log('A user connected:', socket.id);

        // Обработка получения сообщения от клиента
        socket.on('chat message', (msg) => {
            console.log('Message from client:', msg);

            // Отправка сообщения обратно всем подключенным клиентам
            io.emit('chat message', msg);
        });

        // Обработка отключения пользователя
        socket.on('disconnect', () => {
            console.log('User disconnected:', socket.id);
        });
    });

    return io;
}

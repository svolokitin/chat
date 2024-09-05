import io from './index.js'

export function setupSocket() {
    
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


}

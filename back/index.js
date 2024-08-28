import express from 'express';
import cors from 'cors';
import connectDB from './dataBase/connect.js';
import router from './router.js';
import http from 'http';
import { setupSocket } from './socket.js'; 

const app = express();
const server = http.createServer(app);
const PORT = 7777; 

const io = setupSocket(server);

app.use(express.json());
app.use('/users', router);

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

import express from 'express';
import connectDB from './dataBase/connect.js';
import router from './router.js';

const app = express();
const PORT = 7777;

app.use(express.json());
app.use('/users', router);

async function startServer() {
    try {
        connectDB();
        app.listen(PORT, () => console.log('Server working on port: ' + PORT));
    }
    catch (err) {
        return err.message;
    }
}

startServer();

import mysql2 from 'mysql2';
import { DB_HOST, DB_USER, DB_PASS, DB } from './config.js';

const mysql = mysql2.createConnection({
    host: DB_HOST,
    user: DB_USER,
    database: DB,
    password: DB_PASS
});

export default mysql;

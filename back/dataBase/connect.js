import mysql from "./connectMYSQL.js";

function connectDB () {
    mysql.connect(function (err) {
        if (err) {return console.log('Connect to data base failed!');}
        else {return console.log('Connect to data base successfully!');}
    });
}

export default connectDB;

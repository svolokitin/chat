import mysql from "./connectMYSQL.js";

function connectDB () {
    mysql.connect(function (err) {
        if (err) {return console.log(err.message);}
        else {return console.log('Connect to data base successfully!');}
    });
}

export default connectDB;

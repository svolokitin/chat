import mysql from "./connectMYSQL.js";

function connectDB () {
    mysql.connect(function (err) {
        if (err) {console.log(err.message);}
        else {console.log('Connect to data base successfully!');}
    });
}

export default connectDB;

import sequelize from 'sequelize';
import DataTypes from 'sequelize';
import { DB_HOST, DB_USER, DB_PASS, DB } from '../dataBase/config.js';

const db = new sequelize (
    DB, DB_USER, DB_PASS, {host: DB_HOST, dialect: 'mysql'}
);

const Users = await db.define('Users', {
    nickname: {type: DataTypes.STRING, allowNull: false},
    login: {type: DataTypes.STRING, allowNull: false},
    email: {type: DataTypes.STRING, allowNull: false},
    password: {type: DataTypes.STRING, allowNull: false}
},
{
    timestamps: false
}
);

// Members.hasOne(results);
// results.belongsTo(Members);

// db.sync({alter: true}).then(()=>{
// console.log("Tables have been sync");
// }).catch(err=>console.log(err));

// const adminRole = new Roles({value: 'ADMIN'});
// await adminRole.save();

export default Users;

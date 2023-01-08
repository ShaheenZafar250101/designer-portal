import {Sequelize} from "sequelize";

const db = new Sequelize('rabia','root','',{
    host: "localhost",
    dialect: "mysql"
});


export default db;
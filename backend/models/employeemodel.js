import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const designer = db.define('login',{
    email:{
        type:DataTypes.TEXT
    },
    password:{
        type:DataTypes.TEXT
    },
    token:{
        type:DataTypes.TEXT
    }
},{
    freezeTableName:true,
    timestamps: false
});

export default designer;
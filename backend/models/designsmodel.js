import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Design = db.define('designs',{
    name:{
        type:DataTypes.TEXT
    },
    tool:{
        type:DataTypes.TEXT
    },
   dated:{
    type:Date
   },
    image:{
        type:DataTypes.TEXT
    },
    description:{
        type:DataTypes.TEXT
    },
    status:{
        type:DataTypes.TEXT
    },
    file:{
        type:DataTypes.TEXT
    }
},{
    freezeTableName:true,
    timestamps: false
});

export default Design;
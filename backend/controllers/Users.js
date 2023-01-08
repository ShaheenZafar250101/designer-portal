//import Users from "../models/UserModel.js";
import designer from "../models/employeemodel.js";
import jwt from "jsonwebtoken";
import sequelize from "sequelize";
import Design from "../models/designsmodel.js";
const Op = sequelize.Op;
const fn = sequelize.fn;
//const http = require('http')
import formidable from "formidable";
import fs from "fs";

export const Login = async (req, res) => {
  // console.log("ok");
  try {
    const user = await designer.findAll({
      where: {
        email: req.body.email,
        password: req.body.password,
      },
    });


    if (!user[0]) return res.status(400).json({ msg: "Wrong Password Or Email Not Match" });
    
    const userId = user[0].id;
    try {
      await designer.update(
        {
          token:req.body.r_token
        },
        {
          where: {
            id: userId,
          },
        }
      );
      res.json({ msg: "Token Set" });}catch(error){
        if (error)
      res.status(404).json({ msg: "Something Wrong" });
  }
         
  } catch (error) {
    if (error)
      res.status(404).json({ msg: "Wrong Password Or Email Not Match" });
  }
};


export const signout = async (req, res) => {
  // console.log("ok");
  try {
    const user = await designer.findAll({
      where: {
        email: req.body.o_mail
      },
    });


    if (!user[0]) return res.status(400).json({ msg: "Wrong Password Or Email Not Match" });
    
    const userId = user[0].id;
    try {
      await designer.update(
        {
          token:null
        },
        {
          where: {
            id: userId,
          },
        }
      );
      console.log("Done");
      res.json({ msg: "Token Set" });}catch(error){
        if (error)
      res.status(404).json({ msg: "Something Wrong" });
  }
         
  } catch (error) {
    if (error)
      res.status(404).json({ msg: "Wrong Password Or Email Not Match" });
  }
};

export const getUsers = async (req, res) => {
  //const { email } = req.query;
  // console.log("ok");
  try {
    const users = await Design.findAll({
      attributes: [
        "id",
        "name",
        "tool",
        "dated",
        "image",
        "description",
        "status",
        "file"
      ],
    });
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};

export const Upload = async (req, res) => {
  //console.log("ok");
  try {
    await Design.create({
      name: req.body.name,
      tool: req.body.tool,
      dated: req.body.dated,
      image: req.body.file,
      description: req.body.des,
      status: req.body.status,
     file:req.body.pdf
    });
    res.json({ msg: "Register Successfully" });
  } catch (error) {
    res.status(400).json({ msg: "Email Already Exist" });
  }
};

export const Del = async (req, res) => {
  //console.log("Called");

  const ID = req.body.userId;
  if (!ID) return res.sendStatus(204);
  const user = await Design.findAll({
    where: {
      id: ID,
    },
  });
  if (!user[0]) return res.sendStatus(204);
  const userId = user[0].id;
  await Design.destroy({
    where: {
      id: userId,
    },
  });
  return res.sendStatus(200);
};

export const update = async (req, res) => {
  //console.log("ok");
  const ID = req.body.id;
  if (!ID) return res.sendStatus(204);
  const user = await Design.findAll({
    where: {
      id: ID,
    },
  });
  if (!user[0]) return res.sendStatus(204);
  const userId = user[0].id;
  try {
    await Design.update(
      {
        name: req.body.name,
        tool: req.body.tool,
        dated: req.body.dated,
        image: req.body.file,
        description: req.body.des,
        status: req.body.status,
        file:req.body.pdf
      },
      {
        where: {
          id: userId,
        },
      }
    );
    res.json({ msg: "Updated Successfully" });
  } catch (error) {
    res.status(400).json({ msg: "Email Already Exist" });
  }
};


export const change_password = async (req, res) => {
    //console.log("ok");
    const mail = req.body.o_mail;
    if (!mail) return res.sendStatus(204);
    const user = await designer.findAll({
      where: {
        email:mail,
      },
    });
    //console.log('here');
    if (!user[0]) return res.sendStatus(204);
    const userId = user[0].id;
    try {
      await designer.update(
        {
          email:req.body.email,
          password:req.body.password
        },
        {
          where: {
            id: userId,
          },
        }
      );
      res.json({ msg: "Updated Successfully" });
    } catch (error) {
      res.status(400).json({ msg: "Email Already Exist" });
    }
  };
  

  export const Searching = async (req, res) => {
    const { filter,filter2 } = req.query;
    // console.log("ok");
    try {
      const users = await Design.findAll({
        attributes: [
          "id",
          "name",
          "tool",
          "dated",
          "image",
          "description",
          "status",
        ],where :{
            [Op.or]: [{tool:filter} , {id:filter2}]
    }
      });
      res.json(users);
    } catch (error) {
      console.log(error);
    }
  };


  export const tokentest = async (req, res) => {
    const {token} = req.query;
    try {
      const users = await designer.findAndCountAll({ 
    where:{
      token : token
    }
      });
      console.log(users.count);
      res.json(users.count);
      
    } catch (error) {
      console.log(error);
    } 
  }


  export const tcount = async (req, res) => {
    try {
      const users = await Design.findAndCountAll({
    
      });
      // console.log(users.count);
      res.json(users.count);
      
    } catch (error) {
      console.log(error);
    } 
  }

  export const pcount = async (req, res) => {
    try {
      const users = await Design.findAndCountAll({
        where :{
            status:{[Op.eq]:'In Progress'}
     }
      });
      //console.log(users.count);
      res.json(users.count);
      
    } catch (error) {
      console.log(error);
    } 
  }


  export const ccount = async (req, res) => {
    try {
      const users = await Design.findAndCountAll({
        where :{
            status:{[Op.eq]:'Completed'}
     }
      });
      //console.log(users.count);
      res.json(users.count);
      
    } catch (error) {
      console.log(error);
    } 
  }

  export const mcount1 = async (req, res) => {
    try {
      const users = await Design.findAndCountAll({
        where :{
            [Op.and] : [{dated:{[Op.between]:['2023-01-01','2023-01-31']} }]
     }
      });
      //console.log(users.count);
      res.json(users.count);
      
    } catch (error) {
      console.log(error);
    } 
  }

  export const mcount2 = async (req, res) => {
    try {
      const users = await Design.findAndCountAll({
        where :{
            [Op.and] : [{dated:{[Op.between]:['2023-02-01','2023-02-28']} }]
     }
      });
      //console.log(users.count);
      res.json(users.count);
      
    } catch (error) {
      console.log(error);
    } 
  }
  export const mcount3 = async (req, res) => {
    try {
      const users = await Design.findAndCountAll({
        where :{
            [Op.and] : [{dated:{[Op.between]:['2023-03-01','2023-03-31']} }]
     }
      });
      //console.log(users.count);
      res.json(users.count);
      
    } catch (error) {
      console.log(error);
    } 
  }
  export const mcount4 = async (req, res) => {
    try {
      const users = await Design.findAndCountAll({
        where :{
            [Op.and] : [{dated:{[Op.between]:['2023-04-01','2023-04-30']} }]
     }
      });
      //console.log(users.count);
      res.json(users.count);
      
    } catch (error) {
      console.log(error);
    } 
  }
  export const mcount5 = async (req, res) => {
    try {
      const users = await Design.findAndCountAll({
        where :{
            [Op.and] : [{dated:{[Op.between]:['2023-05-01','2023-05-30']} }]
     }
      });
      //console.log(users.count);
      res.json(users.count);
      
    } catch (error) {
      console.log(error);
    } 
  }
  export const mcount6 = async (req, res) => {
    try {
      const users = await Design.findAndCountAll({
        where :{
            [Op.and] : [{dated:{[Op.between]:['2023-06-01','2023-06-30']} }]
     }
      });
      //console.log(users.count);
      res.json(users.count);
      
    } catch (error) {
      console.log(error);
    } 
  }
  export const mcount7 = async (req, res) => {
    try {
      const users = await Design.findAndCountAll({
        where :{
            [Op.and] : [{dated:{[Op.between]:['2023-07-01','2023-07-31']} }]
     }
      });
      //console.log(users.count);
      res.json(users.count);
      
    } catch (error) {
      console.log(error);
    } 
  }
  export const mcount8 = async (req, res) => {
    try {
      const users = await Design.findAndCountAll({
        where :{
            [Op.and] : [{dated:{[Op.between]:['2023-08-01','2023-08-31']} }]
     }
      });
      //console.log(users.count);
      res.json(users.count);
      
    } catch (error) {
      console.log(error);
    } 
  }
  export const mcount9 = async (req, res) => {
    try {
      const users = await Design.findAndCountAll({
        where :{
            [Op.and] : [{dated:{[Op.between]:['2023-09-01','2023-09-30']} }]
     }
      });
      //console.log(users.count);
      res.json(users.count);
      
    } catch (error) {
      console.log(error);
    } 
  }
  export const mcount10 = async (req, res) => {
    try {
      const users = await Design.findAndCountAll({
        where :{
            [Op.and] : [{dated:{[Op.between]:['2023-10-01','2023-10-31']} }]
     }
      });
      //console.log(users.count);
      res.json(users.count);
      
    } catch (error) {
      console.log(error);
    } 
  }
  export const mcount11 = async (req, res) => {
    try {
      const users = await Design.findAndCountAll({
        where :{
            [Op.and] : [{dated:{[Op.between]:['2023-11-01','2023-11-31']} }]
     }
      });
      //console.log(users.count);
      res.json(users.count);
      
    } catch (error) {
      console.log(error);
    } 
  }
  export const mcount12 = async (req, res) => {
    try {
      const users = await Design.findAndCountAll({
        
        where :{
            [Op.and] : [{dated:{[Op.between]:['2023-12-01','2023-12-31']} }]
     }
      });
      // console.log(users.count);
      res.json(users.count);
      
    } catch (error) {
      console.log(error);
    } 
  }

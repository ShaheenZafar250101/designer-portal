import Employees from "../models/employeemodel.js";
import Users from "../models/UserModel.js";
// import Employee from "../models/employeemodel.js";
//import jwt from "jsonwebtoken";

export const attendee = async (req,res) =>  {

    
    //const status  = req.body;
    console.log(req.body);

    const user = await Users.findAll({
        where:{
            password: req.body.password
        }
    });

    if(!user[0]) return res.status(400).json({msg:"Password Not Matched"});


    try {
        await Employees.create({
            //date: date,
            status:req.body.status,
            email:"shaheenzafar.awan@gmail.com"
            
        });
        res.json({msg: "Attendance Marked Successfully"});
    } catch (error) {
        res.json({msg: "Failed to Mark Attendance"});
    }
}

import Leaves from "../models/leavemodel.js";
// import Employee from "../models/employeemodel.js";
//import jwt from "jsonwebtoken";

export const leave = async (req,res) => {
    try{
        await Leaves.create({
            Name:"Shaheen",
            email:"shaheen@gmail.com",
            application:req.body.leave
        })
    }
    catch(e){
        res.status(400).json({msg: "Something Went Wrong"})
    }
}
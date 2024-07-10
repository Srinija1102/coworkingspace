import { Request,Response } from "express";
import { UserModel } from "../models/user.model";
import { createuserInputs } from "../zodTypes/types";


// creates a user
export const createuser = async(req:Request,res:Response) =>{
    const body = await req.body;
    const validate = await createuserInputs.safeParse(body);
    try{
        if(!validate.success){
            res.json({
                msg: "Invalid Inputs",
            })
        }else{
            await UserModel.create({
                name: body.name,
                email: body.email,
                password: body.password,
                phone: body.phone,
                role: "user",
                coins: 0,
                createdAt: Date.now(),
            })
            return res.json({
                msg: "user created"
            })
        }
    }catch(e){
        res.json({
            msg: e,
        })
    }
}

// to get all users
export const getusers = async(req:Request,res:Response) =>{
    try {
        const data = await UserModel.find({ role: "user" });
        res.json({
            msg: data 
        });
    } catch (err) {
        res.status(500).json({ msg: err });
    }
}

// get info of a user
export const userbyid = async(req:Request,res:Response)=>{
    const id = await req.params.id;
    try{
        const data = await UserModel.findOne({name: id});
        if(!data){
            return res.json({
                msg: "No such user"
            })
        }
        return res.json({
            msg: data
        })
    }catch(e){
        res.json({
            msg: e
        })
    }
}


export const deleteuser = async(req:Request,res:Response)=>{
    const id = await req.params.id;
    try{
        const data = await UserModel.findOne({name: id});
        if(!data){
            return res.json({
                msg: "No such user"
            })
        }
        await UserModel.deleteOne({name: id});
        return res.json({
            msg: "user deleted"
        })
    }catch(e){
        res.json({
            msg: e
        })
    }
}

// to update user info
export const updateuser = async(req:Request,res:Response)=>{
    const id = await req.params.id;
    const body = await req.body;
    try {
        await UserModel.findOneAndUpdate({name: id},{
            name: body.name,
            email: body.email,
            password: body.password,
            phone: body.phone,
            coins: parseInt(body.coins),
        })
        res.json({
            msg: "User updated",
        })
    } catch (error) {
    res.json({
        msg: error
    })  
    }
}
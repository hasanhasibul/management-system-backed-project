const userModel = require('../models/userModel');
const  jwt = require('jsonwebtoken');
exports.createUser = (req,res)=>{
    const reqBody = req.body ;
    console.log(reqBody);
    userModel.create(reqBody,(error,data)=>{
        if (error) {
            res.status(401).json({status:"fail",data:error})
        } else {
            res.status(201).json({status:"success",data:data})
        }
    })

}
exports.userLogin = (req,res)=>{
    const userName = req.body['userName'];
    const password = req.body['password'];
    userModel.find({userName:userName ,password:password},(error,data)=>{
        if (error) {
            res.status(401).json({status:"fail",data:error})
        } else {

          const token =  jwt.sign({
                exp: Math.floor(Date.now() / 1000) + (60 * 60)*60,
                data: data
              }, 'secret123');
            res.status(201).json({status:"success",token:token,data:data})
        }
    })
}
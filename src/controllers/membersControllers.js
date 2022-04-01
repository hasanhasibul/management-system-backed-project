const membersModel = require('../models/membersModel');
exports.createMember = (req,res)=>{
    const firstName = req.body['firstName'] ;
    const lastName = req.body['lastName'] ;
    const gender = req.body['gender'] ;
    const address = req.body['address'] ;
    const email = req.body['email'] ;
    const createdDate =Date.now();

   const  reqBody = {
    firstName:firstName,
    lastName:lastName,
    gender:gender,
    address:address,
    email:email,
    createdDate:createdDate
   }

    membersModel.create(reqBody,(error,data)=>{
        if (error) {
            res.status(401).json({status:"fail",data:error})
        } else {
            res.status(201).json({status:"success",data:data})
        }
    })

}
exports.readMember = (req,res)=>{
    membersModel.find({},(error,data)=>{
        if (error) {
            res.status(401).json({status:"fail",data:error})
        } else {
            res.status(201).json({status:"success",data:data})
        }
    })
}

exports.updateMember = (req,res)=>{
    const id = req.body['id'];
    const firstName = req.body['firstName']; ;
    const lastName = req.body['lastName']; ;
    const gender = req.body['gender']; ;
    const address = req.body['address']; ;
    const email = req.body['email']; ;
    const createdDate = Date.now() ;
   
    const reqBody = {
        firstName:firstName,
        lastName:lastName,
        gender:gender,
        address:address,
        email:email,
        createdDate:createdDate
    }
    membersModel.updateOne({_id:id},{$set:reqBody},{ upsert:true},(error,data)=>{
        if (error) {
            res.status(401).json({status:"fail",data:error})
        } else {
            res.status(201).json({status:"success",data:data})
        }
    })
}

exports.deleteMember = (req,res)=>{
    const id = req.body['id'];
    membersModel.remove({_id:id},{ upsert:true},(error,data)=>{
        if (error) {
            res.status(401).json({status:"fail",data:error})
        } else {
            res.status(201).json({status:"success",data:data})
        }
    })
}
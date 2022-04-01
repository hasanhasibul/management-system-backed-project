const trainerModel = require('../models/trainerModel');

exports.createTrainer = (req,res)=>{
    const reqBody = req.body ;
    trainerModel.create(reqBody,(error,data)=>{
        if (error) {
            res.status(401).json({status:"fail",data:error})
        } else {
            res.status(201).json({status:"success",data:data})
        }
    })

}
exports.readTrainers = (req,res)=>{
    trainerModel.find({},(error,data)=>{
        if (error) {
            res.status(401).json({status:"fail",data:error})
        } else {
            res.status(201).json({status:"success",data:data})
        }
    })
}


exports.updateTrainer = (req,res)=>{
    const id = req.body['id'];
    const name = req.body['name'];
    const contact = req.body['contact'];
    const gender = req.body['gender'];
    const rate = req.body['rate'];
    const email = req.body['email']; 
   
    const reqBody = {
        name:name,
        gender:gender,
        contact:contact,
        email:email,
        rate:rate
    }
    
    trainerModel.updateOne({_id:id},{$set:reqBody},{ upsert:true},(error,data)=>{
        if (error) {
            res.status(401).json({status:"fail",data:error})
        } else {
            res.status(201).json({status:"success",data:data})
        }
    })
}

exports.deleteTrainer = (req,res)=>{
    const id = req.body['id'];
    trainerModel.remove({_id:id},{ upsert:true},(error,data)=>{
        if (error) {
            res.status(401).json({status:"fail",data:error})
        } else {
            res.status(201).json({status:"success",data:data})
        }
    })
}
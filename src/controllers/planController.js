
const planModel = require('../models/planModel');

exports.createPlan = (req,res)=>{
    const reqBody = req.body ;
    planModel.create(reqBody,(error,data)=>{
        if (error) {
            res.status(401).json({status:"fail",data:error})
        } else {
            res.status(201).json({status:"success",data:data})
        }
    })

}
exports.readPlan = (req,res)=>{
    planModel.find({},(error,data)=>{
        if (error) {
            res.status(401).json({status:"fail",data:error})
        } else {
            res.status(201).json({status:"success",data:data})
        }
    })
}


exports.updatePlan = (req,res)=>{
    const id = req.body['id'];
    const planType = req.body['planType'];
    const amount = req.body['amount'];
   
   
    const reqBody = {
        planType:planType,
        amount:amount
    }
    
    planModel.updateOne({_id:id},{$set:reqBody},{ upsert:true},(error,data)=>{
        if (error) {
            res.status(401).json({status:"fail",data:error})
        } else {
            res.status(201).json({status:"success",data:data})
        }
    })
}

exports.deletePlan = (req,res)=>{
    const id = req.body['id'];
    planModel.remove({_id:id},{ upsert:true},(error,data)=>{
        if (error) {
            res.status(401).json({status:"fail",data:error})
        } else {
            res.status(201).json({status:"success",data:data})
        }
    })
}
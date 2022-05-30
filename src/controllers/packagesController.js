
const packageModel = require('../models/packagesModel');

exports.createPackage = (req,res)=>{
    const reqBody = req.body ;
    packageModel.create(reqBody,(error,data)=>{
        if (error) {
            res.status(401).json({status:"fail",data:error})
        } else {
            res.status(201).json({status:"success",data:data})
        }
    })

}
exports.readPackage = (req,res)=>{
    packageModel.find({},(error,data)=>{
        if (error) {
            res.status(401).json({status:"fail",data:error})
        } else {
            res.status(201).json({status:"success",data:data})
        }
    })
}
exports.readPackageName = (req,res)=>{
    packageModel.find({},{packageName:1},(error,data)=>{
        if (error) {
            res.status(401).json({status:"fail",data:error})
        } else {
            res.status(201).json({status:"success",data:data})
        }
    })
}

exports.updatePackage = (req,res)=>{
    const id = req.body['id'];
    const packageName = req.body['packageName'];
    const description = req.body['description'];
    const amount = req.body['amount'];
   
   
    const reqBody = {
        packageName:packageName,
        description:description,
        amount:amount
    }
    
    packageModel.updateOne({_id:id},{$set:reqBody},{ upsert:true},(error,data)=>{
        if (error) {
            res.status(401).json({status:"fail",data:error})
        } else {
            res.status(201).json({status:"success",data:data})
        }
    })
}

exports.readPackageById = (req,res)=>{
    const id = req.body.id;
    packageModel.find({_id:id},(error,data)=>{
        if (error) {
            res.status(401).json({status:"fail",data:error})
        } else {
            res.status(201).json({status:"success",data:data})
        }
    })
}
exports.deletePackage = (req,res)=>{
    const id = req.body['id'];
    packageModel.remove({_id:id},{ upsert:true},(error,data)=>{
        if (error) {
            res.status(401).json({status:"fail",data:error})
        } else {
            res.status(201).json({status:"success",data:data})
        }
    })
}
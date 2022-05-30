const memberShipModel = require('../models/membershipAsignModel');
exports.createMembership = (req, res) => {
    const memberName = req.body['memberName'];
    const planType = req.body['planType'];
    const package = req.body['package'];
    const trainer = req.body['trainer'];
    const startDate = req.body['startDate'];
    const endDate = req.body['endDate'];
    const status = req.body['status'];

    const reqBody = {
        memberName: memberName,
        planType: planType,
        package: package,
        trainer: trainer,
        startDate: startDate,
        endDate: endDate,
        status: status
    }

    memberShipModel.create(reqBody, (error, data) => {
        if (error) {
            res.status(401).json({ status: "fail", data: error })
        } else {
            res.status(201).json({ status: "success", data: data })
        }
    })

}
exports.readMembership = (req, res) => {
    memberShipModel.find({}, (error, data) => {
        if (error) {
            res.status(401).json({ status: "fail", data: error })
        } else {
            res.status(201).json({ status: "success", data: data })
        }
    })
}
exports.readmembershipById = (req,res)=>{
    const id = req.body.id;
    memberShipModel.find({_id:id},(error,data)=>{
        if (error) {
            res.status(401).json({status:"fail",data:error})
        } else {
            res.status(201).json({status:"success",data:data})
        }
    })
}

exports.updateMembership = (req, res) => {
    const id = req.body['id'];
    const memberName = req.body['memberName'];
    const planType = req.body['planType'];
    const package = req.body['package'];
    const trainer = req.body['trainer'];
    const startDate = req.body['startDate'];
    const endDate = req.body['endDate'];
    const status = req.body['status'];

    const reqBody = {
        memberName: memberName,
        planType: planType,
        package: package,
        trainer: trainer,
        startDate: startDate,
        endDate: endDate,
        status: status
    }
    memberShipModel.updateOne({ _id: id }, { $set: reqBody }, { upsert: true }, (error, data) => {
        if (error) {
            res.status(401).json({ status: "fail", data: error })
        } else {
            res.status(201).json({ status: "success", data: data })
        }
    })
}

exports.deleteMembership = (req, res) => {
    const id = req.body['id'];
    memberShipModel.remove({ _id: id }, { upsert: true }, (error, data) => {
        if (error) {
            res.status(401).json({ status: "fail", data: error })
        } else {
            res.status(201).json({ status: "success", data: data })
        }
    })
}
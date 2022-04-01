const scheduleModel = require('../models/scheduleModel');
exports.createSchedule = (req, res) => {
    const memberName = req.body['memberName'];
    const dow = req.body['dow'];
    const mf = req.body['mf'];
    const mt = req.body['mt'];
    const tf = req.body['tf'];
    const tt = req.body['tt'];

    const reqBody = {
        memberName: memberName,
        dow: dow,
        mf: mf,
        mt: mt,
        tf: tf,
        tt: tt
    }

    scheduleModel.create(reqBody, (error, data) => {
        if (error) {
            res.status(401).json({ status: "fail", data: error })
        } else {
            res.status(201).json({ status: "success", data: data })
        }
    })

}
exports.readSchedule = (req, res) => {
    scheduleModel.find({}, (error, data) => {
        if (error) {
            res.status(401).json({ status: "fail", data: error })
        } else {
            res.status(201).json({ status: "success", data: data })
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
    scheduleModel.updateOne({ _id: id }, { $set: reqBody }, { upsert: true }, (error, data) => {
        if (error) {
            res.status(401).json({ status: "fail", data: error })
        } else {
            res.status(201).json({ status: "success", data: data })
        }
    })
}

exports.deleteMembership = (req, res) => {
    const id = req.body['id'];
    scheduleModel.remove({ _id: id }, { upsert: true }, (error, data) => {
        if (error) {
            res.status(401).json({ status: "fail", data: error })
        } else {
            res.status(201).json({ status: "success", data: data })
        }
    })
}
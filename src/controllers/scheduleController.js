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

exports.readScheduleById = (req, res) => {
    const id = req.body.id ;
    scheduleModel.find({_id:id}, (error, data) => {
        if (error) {
            res.status(401).json({ status: "fail", data: error })
        } else {
            res.status(201).json({ status: "success", data: data })
        }
    })
}

exports.updateSchedule = (req, res) => {
    const id = req.body['id'];
    const memberName = req.body['memberName'];
    const mf = req.body['mf'];
    const mt = req.body['mt'];
    const tf = req.body['tf'];
    const tt = req.body['tt'];
    const dow = req.body['dow'];

    const reqBody = {
        memberName: memberName,
        mf: mf,
        mt: mt,
        tf: tf,
        tt: tt,
        dow: dow
    }
    console.log(reqBody);
    scheduleModel.updateOne({ _id: id }, { $set: reqBody }, { upsert: true }, (error, data) => {
        if (error) {
            res.status(401).json({ status: "fail", data: error })
        } else {
            res.status(201).json({ status: "success", data: data })
        }
    })
}

exports.deleteSchedule = (req, res) => {
    const id = req.body['id'];
    scheduleModel.remove({ _id: id }, { upsert: true }, (error, data) => {
        if (error) {
            res.status(401).json({ status: "fail", data: error })
        } else {
            res.status(201).json({ status: "success", data: data })
        }
    })
}
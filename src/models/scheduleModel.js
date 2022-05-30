const mongoose =  require('mongoose');
const scheduleSchema =  mongoose.Schema({
    memberName:{type:String},
    dow:{type:Array},
    mf:{type:String},
    mt:{type:String},
    tf:{type:Date},
    tt:{type:Date}
},{versionKey:false})

const scheduleModel = mongoose.model('schedule',scheduleSchema);
module.exports = scheduleModel ;
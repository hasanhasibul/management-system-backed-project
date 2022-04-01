const mongoose =  require('mongoose');
const memberShipSchema =  mongoose.Schema({
    memberName:{type:String},
    planType:{type:String},
    package:{type:String},
    trainer:{type:String},
    startDate:{type:Date},
    endDate:{type:Date},
    status:{type:String}
},{versionKey:false})

const memberShipModel = mongoose.model('membershipAsign',memberShipSchema);
module.exports = memberShipModel ;
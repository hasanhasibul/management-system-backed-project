const mongoose =  require('mongoose');
const planSchema =  mongoose.Schema({
    planType:{type:String},
    amount:{type:String}
    
},{versionKey:false})

const planModel = mongoose.model('plans',planSchema);
module.exports = planModel ;
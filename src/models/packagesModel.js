const mongoose =  require('mongoose');
const packageSchema =  mongoose.Schema({
    packageName:{type:String},
    description:{type:String},
    amount:{type:String}
    
},{versionKey:false})

const packageModel = mongoose.model('packages',packageSchema);
module.exports = packageModel ;
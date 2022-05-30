const mongoose =  require('mongoose');
const trainerSchema =  mongoose.Schema({
    name:{type:String},
    contact:{type:String},
    gender:{type:String},
    rate:{type:String},
    email:{type:String}
    
},{versionKey:false})

const trainerModel = mongoose.model('trainers',trainerSchema);
module.exports = trainerModel ;
const mongoose =  require('mongoose');
const userSchema =  mongoose.Schema({
    name:{type:String},
    userName:{type:String,unique:true},
    password:{type:String},
    confirm:{type:String},
    userType:{type:String}
},{versionKey:false})

const userModel = mongoose.model('users',userSchema);
module.exports = userModel ;
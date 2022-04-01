const mongoose =  require('mongoose');
const userSchema =  mongoose.Schema({
    name:{type:String},
    userName:{type:String,unique:true},
    password:{type:String,
        validate: {
            validator: function(value) {
              return /^[A-Za-z]\w{7,14}$/.test(value);
            },
            message: `example pass: hasib_123 7 to 15 characters which contain only characters, numeric digits, underscore and first character must be a letter`
          }
    
    },
    userType:{type:String}
},{versionKey:false})

const userModel = mongoose.model('users',userSchema);
module.exports = userModel ;
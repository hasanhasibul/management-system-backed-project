const mongoose =  require('mongoose');
const userSchema =  mongoose.Schema({
    firstName:{type:String},
    lastName:{type:String},
    gender:{type:String},
    address:{type:String},
    email:{type:String,
        validate: {
            validator: function(value) {
              return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
            },
            message: `{VALUE} is not a valid  email`
          }
    
    },
    createdDate:{type:Date}
},{versionKey:false})

const membersModel = mongoose.model('members',userSchema);
module.exports = membersModel ;
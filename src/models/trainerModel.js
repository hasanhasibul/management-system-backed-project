const mongoose =  require('mongoose');
const trainerSchema =  mongoose.Schema({
    name:{type:String},
    contact:{type:String,
      validate: {
        validator: function(value) {
          return /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/.test(value);
        },
        message: `{VALUE} is not a valid  email`
      }
    
    },
    gender:{type:String},
    rate:{type:String},
    email:{type:String,
        validate: {
            validator: function(value) {
              return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
            },
            message: `{VALUE} is not a valid  email`
          }
    }
    
},{versionKey:false})

const trainerModel = mongoose.model('trainers',trainerSchema);
module.exports = trainerModel ;
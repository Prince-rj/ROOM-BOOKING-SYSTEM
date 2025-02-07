const mongoose  = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');
var userSchema = mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String,
        unique: true
    },
    password:{
        type:String
    },
    createAt:{
        type:Date,
        default:Date.now()
    }
})
// userSchema.index({ email: 1 }, { unique: true });

module.exports = mongoose.mongoose.model("RoomBankingUser", userSchema)
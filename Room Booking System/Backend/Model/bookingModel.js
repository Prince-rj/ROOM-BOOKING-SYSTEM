const mongoose  = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');
var bookschema = mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    roomName:{
        type:String
    },
    roomPrice:{
        type:Number
    },
    userAddress:{
        type:String
    },
    mobile:{
        type:Number
    },
    age:{
        type:Number
    },
    aadhaar:{
        type:Number
    },
    bookedat:{
        type:Date,
        default:Date.now()
    }
})
// userSchema.index({ email: 1 }, { unique: true });

module.exports = mongoose.mongoose.model("RoomBankingBooking", bookschema)
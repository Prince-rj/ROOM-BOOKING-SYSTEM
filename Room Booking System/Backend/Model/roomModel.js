const mongoose  = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');
var roomSchema = mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    roomName:{
        type:String
    },
    roomAddress:{
        type:String
    },
    roomPrice:{
        type:Number
    },
    roomDescription:{
        type:String
    },
    roomType:{
        type:String
    },
    roomImage:{
        type:Array
    },
    createAt:{
        type:Date,
        default:Date.now()
    }
})
// userSchema.index({ email: 1 }, { unique: true });

module.exports = mongoose.mongoose.model("RoomBankingrooms", roomSchema)
const mongoose = require("mongoose");
const User = require("../Model/userModel");
const Room = require("../Model/roomModel");
const path = require("path");
const Booking=require('../Model/bookingModel.js')


require("../config/googleAuth.js");
module.exports.registersubmit = async(req, res) => {
  var newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  newUser
    .save()
    .then((data) => {
      // save is used for insertion
      return res.status(200).json({
        success: true,
        user: data,
      });
    })
    .catch((err) => {
      return res.status(404).json({
        success: false,
        message: "error in inserting new user",
        error: err.message,
      });
    });
};
module.exports.booksubmit = async(req, res) => {
  var newBooking = new Booking({
        name:req.body.name,
        email:req.body.email,
        roomName:req.body.roomName,
        roomPrice:req.body.roomPrice,
        userAddress:req.body.userAddress,
        mobile:req.body.mobile,
        age:req.body.age,
        aadhaar:req.body.aadhaar
  });
  console.log(req.body);
  newBooking
    .save()
    .then((data) => {
      // save is used for insertion
      return res.status(200).json({
        success: true,
        user: data,
      });
    })
    .catch((err) => {
      return res.status(404).json({
        success: false,
        message: "error in inserting new user",
        error: err.message,
      });
    });
};

module.exports.loginsubmit = (req, res) => {
  var user = new User({
    email: req.body.email,
    password: req.body.password,
  });
  return User.findOne({ email: user.email, password: user.password })
    .then((data) => {
      res.status(200).json({
        success: true,
        user: data,
      });
    })
    .catch((err) => {
      res.status(404).json({
        success: false,
        error: err,
      });
    });
};
module.exports.addroomsubmit = (req, res) => {
  const arr=[];
  req.files.map((file)=>{
    arr.push(Math.floor(Date.now()/1000)+file.originalname);
  })
  var newRoom = new Room({
    name: req.body.name,
    email: req.body.email,
    roomName: req.body.roomName,
    roomAddress: req.body.roomAddress,
    roomPrice: req.body.roomPrice,
    roomDescription: req.body.roomDescription,
    roomType: req.body.roomType,
    roomImage:arr
  });
  
console.log(req.body);
  newRoom
    .save()
    .then((data) => {
      // save is used for insertion
      console.log('success');
      return res.status(200).json({
        success: true,
        user: data,
      });
    })
    .catch((err) => {
      return res.status(404).json({
        success: false,
        message: "error in inserting new room",
        error: err.message,
      });
    });
    console.log(req.files.length)
};

module.exports.fetchRoom=(req,res)=>{
  return Room.find()
    .then((data) => {
      res.status(200).json({
        success: true,
        user: data,
      });
    })
    .catch((err) => {
      res.status(404).json({
        success: false,
        error: err,
      });
    });
}


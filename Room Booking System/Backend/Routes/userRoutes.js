const express = require('express');
const userRoutes = express.Router();
const controller = require('../Controller/userController')
const upload=require('../config/multer')
userRoutes.post('/loginsubmit', controller.loginsubmit)
userRoutes.post('/registersubmit', controller.registersubmit)
userRoutes.post('/addroomsubmit',upload.any('roomImage'), controller.addroomsubmit)
userRoutes.get('/fetchRoomData', controller.fetchRoom)
userRoutes.post('/booksubmit', controller.booksubmit)
module.exports = userRoutes;                    
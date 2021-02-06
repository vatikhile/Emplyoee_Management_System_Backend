const express = require('express');
const route = express.Router();
const controller = require('../controller/userController')

route.post('/employee/add', controller.addEmployee)



module.exports = route
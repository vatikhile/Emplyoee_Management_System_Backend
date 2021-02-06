const express = require('express');
const route = express.Router();
const controller = require('../controller/userController')

route.post('/employee/add', controller.addEmployee)
route.get('/employee/read', controller.getEmployeeInfo)
route.delete('/employee/deleteInfo', controller.deleteEmployeeInfo)

module.exports = route
const express = require('express');
const route = express.Router();
const controller = require('../controller/userController')

route.post('/employee/add', controller.addEmployee)
route.get('/singleemployee/read:id', controller.getSingleEmployeeInfo)
route.get('/allemployee/read', controller.getEmployeeInfo)
route.delete('/employee/deleteInfo:id', controller.deleteEmployeeInfo)
route.put('/employee/updateInfo:id', controller.updateEmployee)
module.exports = route
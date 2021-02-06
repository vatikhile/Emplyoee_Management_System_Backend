
const data = require('../Model/userModel');

module.exports.addEmployee = (req, callback) => {

    data.addEmployee(req, (err, data) => {
        if (err) {
            return callback(err)

        } else {
            return callback(null, data)
        }

    })

}
module.exports.getEmployeeInfo = (req, callback) => {

    data.getEmployeeInfo(req, (err, data) => {
        if (err) {
            return callback(err)

        } else {
            return callback(null, data)
        }

    })

}
module.exports.deleteEmployeeInfo = (req, callback) => {

    data.deleteEmployeeInfo(req, (err, data) => {
        if (err) {
            return callback(err)

        } else {
            return callback(null, data)
        }

    })

}




const model = require('../Model/userModel');

module.exports.addEmployee = (req, callback) => {

    model.addEmployee(req, (err, data) => {
        if (err) {
            return callback(err)

        } else {
            return callback(null, data)
        }

    })

}
module.exports.getEmployeeInfo = (req, callback) => {

    model.getEmployeeInfo(req, (err, data) => {
        if (err) {
            return callback(err)

        } else {
            return callback(null, data)
        }

    })

}
module.exports.deleteEmployeeInfo = (req, callback) => {

    model.deleteEmployeeInfo({ "_id": req.params.id }, (err, data) => {
        console.log("dd", req.body._id);
        if (err) {
            return callback(err)

        } else {
            return callback(null, data)
        }

    })
}
module.exports.updateEmployee = (req, callback) => {

    model.updateEmployee(({ _id: req.params.id }, req.body), (err, data) => {

        if (err) {
            return callback(err)

        } else {
            return callback(null, data)
        }

    })

}
module.exports.getSingleEmployeeInfo = (req, callback) => {

    model.getSingleEmployeeInfo({ "_id": req.params.id }, (err, data) => {
        if (err) {
            return callback(err)

        } else {
            return callback(null, data)
        }

    })

}





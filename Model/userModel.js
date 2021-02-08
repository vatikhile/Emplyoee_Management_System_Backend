const mongoose = require('mongoose');

//user Schema
const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    createOn: {
        type: Date,
        default: Date.now()
    }
});
/* user model create */
const UserModel = mongoose.model('Employees', userSchema)
/* For add new employee entry in the database or return the error*/
exports.addEmployee = (req, callback) => {

    UserModel.create(req.body).then((result) => {
        return callback(null, result)

    }).catch((err) => {
        return callback(err)
    })
}
/* getting the all the entry of employee in the database */
exports.getEmployeeInfo = (req, callback) => {
    UserModel.find().then((result) => {
        return callback(null, result)

    }).catch((err) => {
        return callback(err)
    })
}

/* Deleting the entry of employee by passing the id of the record in the database */
exports.deleteEmployeeInfo = (req, callback) => {
    UserModel.findByIdAndDelete(req).then((result) => {

        return callback(null, result)

    }).catch((err) => {
        return callback(err)
    })
}

/* Update the specific details of employee by passing the id in the database */
exports.updateEmployee = (req, callback) => {

    UserModel.updateOne(req).then((result) => {

        return callback(null, result)

    }).catch((err) => {
        return callback(err)
    })
}
/* Get single employee Entry from the Collection */
exports.getSingleEmployeeInfo = (req, callback) => {
    UserModel.findOne(req).then((result) => {
        return callback(null, result)

    }).catch((err) => {
        return callback(err)
    })
}







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
        unique:true
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
    const newMessage = new UserModel({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email

    });

    newMessage.save(req.body).then((result) => {
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
    console.log("delte",req.body);
    UserModel.deleteOne(req.body).then((result) => {
        return callback(null, result)

    }).catch((err) => {
        return callback(err)
    })
}


// exports.updateEmployee = (req, callback) => {
//     // const id=req.params.id;
//     UserModel.update(req.data).then((result) => {
//         return callback(error, result)

//     }).catch((err) => {
//         return callback(err)
//     })
// }




/* list findAll()
single find()
delete Delete */



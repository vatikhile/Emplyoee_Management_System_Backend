const mongoose = require('mongoose');
const { addEmployee } = require('../Service/userService');


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
        require: true
    },
    createOn: {
        type: Date,
        default: Date.now()
    }
});
/* user model create */
const UserModel = mongoose.model('Employees', userSchema)

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



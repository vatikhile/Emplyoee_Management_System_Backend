
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




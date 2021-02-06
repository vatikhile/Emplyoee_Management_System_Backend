
const service = require('../Service/userService');

module.exports.addEmployee = (req, res) => {
    service.addEmployee(req, (err, data) => {
        if (err) {

            return err;
        } else {

            return res.json({
                status: true,
                message: 'sucess',
                data,
            })
        }
    })
}
module.exports.getEmployeeInfo = (req, res) => {
    service.getEmployeeInfo(req, (err, data) => {
        if (err) {

            return err;
        } else {

            return res.json({
                status: true,
                message: 'sucess',
                data,
            })
        }
    })
}
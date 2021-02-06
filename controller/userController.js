
const service = require('../Service/userService');
try {
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
}
catch (err) {
    console.log("ERROR: while sending the message",err);

}
try {
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
}
catch (err) {
    console.log("ERROR: while sending the message",err);

}
try {
    module.exports.deleteEmployeeInfo = (req, res) => {
        service.deleteEmployeeInfo(req, (err, data) => {
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
}
catch (err) {
    console.log("ERROR: while sending the message",err);

}
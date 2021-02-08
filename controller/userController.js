
const service = require('../Service/userService');
try {
    module.exports.addEmployee = (req, res) => {
        service.addEmployee(req, (err, data) => {

            if (err) {

                return err;
            } else {

                return res.json({
                    status: true,
                    message: 'Sucessfully Record Added',
                    data,
                })
            }
        })
    }
}
catch (err) {
    console.log("ERROR: while sending the message", err);

}
try {
    module.exports.getEmployeeInfo = (req, res) => {
        service.getEmployeeInfo(req, (err, data) => {
            if (err) {

                return err;
            } else {

                return res.json({
                    status: true,
                    message: 'Sucessfully Get Records',
                    data,
                })
            }
        })
    }
}
catch (err) {
    console.log("ERROR: while sending the message", err);

}
try {
    module.exports.deleteEmployeeInfo = (req, res) => {
        service.deleteEmployeeInfo(req, (err, data) => {

            if (err) {

                return err;
            } else {

                return res.json({
                    status: true,
                    message: 'Sucessfully Deleted',
                    data,
                })
            }
        })
    }
}
catch (err) {
    console.log("ERROR: while sending the message", err);

}
try {
    module.exports.updateEmployee = (req, res) => {
        service.updateEmployee(req, (err, data) => {
            console.log("req,", req);
            if (err) {

                return err;
            } else {

                return res.json({
                    status: true,
                    message: 'Sucessfully Updated',
                    data,
                })
            }
        })
    }
}
catch (err) {
    console.log("ERROR: while sending the message", err);

}

try {
    module.exports.getSingleEmployeeInfo = (req, res) => {
        service.getSingleEmployeeInfo(req, (err, data) => {

            if (err) {

                return err;
            } else {

                return res.json({
                    status: true,
                    message: 'Sucessfully Updated',
                    data,
                })
            }
        })
    }
}
catch (err) {
    console.log("ERROR: while sending the message", err);

}

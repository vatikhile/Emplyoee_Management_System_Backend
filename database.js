const mongoose = require('mongoose');
const assert = require('assert')
const db_url = 'mongodb://127.0.0.1:27017/employee_data';

mongoose.connect(
    db_url,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    },
    function (error, link) {
        assert.equal(error, null, 'DB connection fails')
        console.log("DB connection Sucess..");
    
    }
)
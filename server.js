const express = require('express')
const app = express();
const routes = require('./Routes/route')
const db = require('./database')
const PORT = 3000;
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use('/', routes);

app.listen(PORT, () => {
  console.log("server start as port", PORT);
})
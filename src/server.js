const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const register = require('./routes/register.js');
const login = require('./routes/login.js')

const staticFiles = __dirname + './../dist';

app.use(express.static(staticFiles));
app.use(bodyParser());
app.use('/register', register.router);
app.use('/login', login);


app.listen('3001', err =>{
  console.log('Listening on port 3001')
})

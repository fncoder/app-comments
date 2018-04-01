const express = require('express');
const bodyParser = require('body-parser');
const register = require('./routes/register.js')
const login = require('./routes/login.js')
const app = express();
const staticFiles = __dirname + './../dist';

app.use(express.static(staticFiles));
app.use(bodyParser());
app.use('/register', register);
app.use('/login', login);


app.listen('3001', err =>{
  console.log('Listening on port 3001')
})

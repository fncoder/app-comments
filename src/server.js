const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const staticFiles = __dirname + './../dist';
const configAdmin = {
  name: 'Admin',
  password: 'admin',
  repeatPassword: 'admin'
}
let index = 0;
const users = [configAdmin];

app.use(bodyParser());
app.use(express.static(staticFiles));

app.post('/register', (req, res, next)=>{
  const name = req.body.name;
  const password = req.body.password;
  const repeatPassword = req.body.repeatPassword;
  const registerStatus = req.body.registerStatus;

    if(name.length <= 0 && password.length <= 0 && repeatPassword.length <= 0){
      res.json({
        message: 'This field is required',
        fields: true
      })
    }

    else if(password !== repeatPassword){
      res.json({
        message: 'Password must be the same',
        password: true
      })
    }

    else{
      let checkBusy = true;
      for(let i=0; i < users.length; i++){
        if(users[i].name === name && checkBusy){
          checkBusy = false;
          res.json({
            message: 'Your nickname is busy',
            busy: true
          })
          return;
        }
        else{
          checkBusy = true;
        }
      }

      if(checkBusy && registerStatus){
        let newUser = {
          id: index,
          name: req.body.name,
          password: req.body.password,
          repeatPassword: req.body.repeatPassword,
          status: 'register'
        }

        index++;
        users.push(newUser)
        res.json(newUser)
      }

      else{
        res.json({
          message: '',
          busy: true
        })
      }
    }
})

app.get('/login', (req, res) =>{

})

app.get('/users', (req, res)=>{
  res.json(users);
})

app.listen('3001', err =>{
  console.log('Listening on port 3001')
})

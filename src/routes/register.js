const express = require('express');
const router = express.Router();

const configAdmin = {
  name: 'Admin',
  password: 'admin',
  repeatPassword: 'admin'
}

let index = 0;
const users = [configAdmin];

router.post('/', (req, res) =>{
  const name = req.body.name;
  const password = req.body.password;
  const repeatPassword = req.body.repeatPassword;
  const registerStatus = req.body.registerStatus;

    if(name.length <= 0 && password.length <= 0 && repeatPassword.length <= 0){
      res.json({
        message: 'All fields are required',
        fields: true
      })
    }

    else if(password.length <= 0 && repeatPassword.length <= 0){
      res.json({
        message: 'This field is required',
        password: true
      })
    }

    else if(name.length <= 0){
      res.json({
        message: 'This field is required',
        busy: true
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
        if(users[i].name === name){
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
          fields: true
        })
      }
    }
})

module.exports = {router, users};

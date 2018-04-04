const express = require('express');
const router = express.Router();
const users = require('./register.js').users;


router.post('/', (req, res) =>{
  const name = req.body.name;
  const password = req.body.password;
  const loginStatus = req.body.loginStatus;

  if(name.length <= 0 && password.length <= 0){
    res.json({
      message: 'All fields are required',
      fields: true
    })
  }

  else if(name.length <=0){
    res.json({
      message: 'This field is required',
      name: true
    })
  }

  else if(password.length <= 0){
    res.json({
      message: 'This field is required',
      password: true
    })
  }

  else{
    if(loginStatus){
      let checkCorrect = true;
        for(let i=0; i < users.length; i++){
          if(users[i].name === name && users[i].password === password){
            res.json({
              name: name,
              password: password,
              status: 'login'
            })
            checkCorrect = false;
            return;
          }

          else{
            checkCorrect = true;
          }
        }

        if(checkCorrect){
          res.json({
            message: 'Incorrect data',
            fields: true
          })
        }
    }
    else{
      res.json({
        message: '',
        fields: true
      })
    }

  }
})

module.exports = router;

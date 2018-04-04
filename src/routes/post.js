const express = require('express');
const router = express.Router();

let index = 0;
const posts = [];

router.post('/', (req, res) =>{
  const userLogin = req.body.name;
  const textarea = req.body.textarea;
  const postStatus = req.body.postStatus;

  if(textarea.length <=0){
    res.json({
      message: 'Your message cannot be empty'
    })
  }

  else{
    if(postStatus){
      const post = {
        id: index,
        date: new Date().toLocaleString('en-GB'),
        name: userLogin,
        textarea: textarea,
        post: 'true'
      }

      posts.push(post)
      res.json(post)
      index++;
    }

    else{
      res.json({
        message: ''
      })
    }
  }
})

module.exports = {router, posts}

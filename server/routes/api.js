const express = require('express');
const router = express.Router();

// declare axios for making http requests
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com'; // mock up API Data Url

/* GET api listing. */
router.get('/', (req, res) => {
  console.log('api works');
  res.send('api works');
});


router.get('/posts', (req,res) => {
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
  axios.get(`${API}/posts`)
    .then(posts => {
      res.status(200).json(posts.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });
})

router.get(`/posts/:postId`, (req,res) => {
  axios.get(`${API}/posts/${req.params.postId}`)
    .then(posts => {
      res.status(200).json(posts.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });
})

router.get(`/posts/:postId/:comments`, (req,res) => {
  axios.get(`${API}/posts/${req.params.postId}/${req.params.comments}`)
    .then(posts => {
      res.status(200).json(posts.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });
})

router.put('/posts/update', (req,res) => {
  var user_id = req.body.id;
  var token = req.body.token;
  res.send(user_id + ' ' + token);
}) 


module.exports = router;
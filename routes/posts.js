var express = require('express');
var router = express.Router();

const PostControllers = require('../controller/posts')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });


router.get('/',  PostControllers.getPosts) 



router.post('/',PostControllers.createdPosts) 


module.exports = router;

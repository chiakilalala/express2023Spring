var express = require('express');
var router = express.Router();

const serviceError = require('@/services/serviceError')
const controllerPosts = require('@/controllers/controllerPosts')
const serviceResponse = require('@/services/serviceResponse')

// router.get("/", serviceError.postControllers.getPosts);
router.get("/",  serviceError.asyncError(async (req, res, next) => {
  const { query } = req;
  console.log(req)
  const result = await controllerPosts.getPosts(query);
  serviceResponse.success(res, result)
}));
router.post("/", serviceError.asyncError(async (req, res, next) => {
  const { user, content } = req.body;

  const result = await controllerPosts.createPost(user, content)
  serviceResponse.success(res, result)
}))
// router.post("/", postControllers.createPost);
// router.patch("/:id", postControllers.updatePost);
// router.delete("/:id", postControllers.deletePost);

module.exports = router;
const Post = require('@/models/post');
const User = require("../models/users");
const appError = require('@/services/appError');


const controllerPost = {
  async getPosts(req)  {
      console.log(req);

      const q = req !== undefined ? { content: new RegExp(req.q) } : {};

      const sort = req.sort == "asc" ? "createdAt" : "-createdAt";
      // asc ���W(�Ѥp��j�A���¨�s) createdAt ;
      // desc ����(�Ѥj��p�B�ѷs����) "-createdAt"

      const allPosts = await Post.find(q).populate({        
          path: "user",
          select: "name photo",
        })
        .sort(sort);
        return allPosts
  },
  async createPost(user, content, image,next) {
  
      // const { user, content, image, createdAt } = req.body;
    
      if (content == undefined) {
        return appError(400, 'content ����', next);
      }else if (user === undefined) {
        return appError(400, 'user ����', next);
      }{
        const newPost = await Post.create({
          user,
          content,
          image
      
        });
        return newPost
      }
        
      } 
    
  // },
  // async updatePost(req, res) {
  //   try {
  //     const data = req.body;
  //     const id = req.params.id;
  //     console.log("id:" + id);

  //     if (data.content!== undefined) {
  //       const updatePost = await Post.findByIdAndUpdate(id, {
  //         content: data.content,
  //         image: data.image,
  //         name: data.name,
  //         likes: data.likes,
  //       });
  //       handleSuccess(res, updatePost);
  //     } else {
  //       handleError(res);
  //     }
  //   } catch (error) {
  //     handleError(res, error);
  //   }
  // },
  // async deletePost(req, res) {
  //   try {
  //     const id = req.params.id;
  //     console.log(id);
  //     const deletePost = await Post.findByIdAndDelete(id);

  //     handleSuccess(res, deletePost);
  //   } catch (error) {
  //     handleError(res, error);
  //   }
  // },
};

module.exports =controllerPost;

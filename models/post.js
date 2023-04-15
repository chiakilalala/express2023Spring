const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
  content: {
    type: String,
    required: [true, "Content 未填寫"],
  },
  image: {
    type: String,
    default: "",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "user",
     //要對應collection名稱，大小寫一樣。 const User = mongoose.model("user", userSchema);
  },
  likes: {
    type: Number,
    default: 0,
  },
},{
  versionKey: false 
});
const Post = mongoose.model("Post", postSchema);

module.exports = Post;

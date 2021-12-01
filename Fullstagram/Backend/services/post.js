const Post = require("../models/post");

const createPost = (data) => {
  const newPost = new Post(data);
  return newPost.save();
};

const getPost = (postId) => {
  return Post.findById(postId);
};

module.exports = { createPost, getPost };

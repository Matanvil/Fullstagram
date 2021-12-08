const Post = require("../models/post");

const createPost = async (data) => {
  const newPost = new Post(data);
  return await newPost.save();
};

const getPost = (postId) => {
  return Post.findById(postId);
};

module.exports = { createPost, getPost };

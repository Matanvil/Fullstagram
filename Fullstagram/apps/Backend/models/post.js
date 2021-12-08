const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  image: { type: String, required: false },
  userName: { type: String, required: true },
  description: { type: String },
  tags: { type: String },
  location: { type: String}
});

const Post = mongoose.model("post", PostSchema);

module.exports = Post;

const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  image: { type: image, required: true },
  userName: { type: "string", required: true },
  description: { type: "string" },
  tags: { type: "string" },
});

const Post = mongoose.model("post", PostSchema);

module.exports = Post;

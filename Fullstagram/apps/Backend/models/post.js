const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  image: { type: String, required: false },
  description: { type: String, trim: true, required: true },
  tags: { type: String },
  location: { type: String},
  owner: {type: mongoose.Schema.Types.ObjectId, required: true, ref: "User"}
},
{
  timestamps: true
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;

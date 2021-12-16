const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const Post = require("../models/post");

//create new post
router.post("/api/posts", auth , async (req, res) => {
  const post = new Post({
    ...req.body,
    owner: req.user._id,
  });
  try {
    await post.save();
    res.status(201).send(post);
  } catch (err) {
    res.status(400).send();
  }
});

// get post by Id (owned by the user)
router.get("/api/posts/:postId", auth,  async (req, res) => {
  const _id = req.params.postId;
  try {
    const post = await Post.findOne({_id, owner: req.user._id})
    if (!post) {
      return res.status(404).send();
    }
    res.send(post);
  } catch (err) {
    res.status(500).send();
  }
});

//get all posts (owned by the user)

// GET /api/posts?complete=true
// GET /api/posts?limit=10&skip=20
// GET /api/posts?sortBy=createdAt:desc
router.get("/api/posts", auth , async (req, res) => {
  const match = {}
  const sort = {}

  if (req.query.complete) {
    match.complete = req.query.complete === "true"
  }

  if (req.query.sortBy) {
    const parts = req.query.sortBy.split(":")
    sort[parts[0]] = parts[1] === "desc" ? -1 : 1
  }
  try {
    const posts = await req.user.populate({
      path: "posts",
      match,
      options: {
        limit: parseInt(req.query.limit),
        skip: parseInt(req.query.skip),
        sort
      }
    });
    res.send(posts.posts);
  } catch (err) {
    res.status(500).send('error' + err);
  }
});

//update a post of an owner 
router.patch("/api/posts/:postId", auth , async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["description", "image", "tags", "location"];
  const isValid = updates.every((update) => allowedUpdates.includes(update));

  if (!isValid) {
    return res.status(400).send({ error: "Invalid update!" });
  }
  const id = req.params.postId;
  try {
    const post = await Post.findOne({_id: id, owner: req.user._id})
   
    if (!post) {
      return res.status(404).send();
    }
    updates.forEach((update) => (post[update] = req.body[update]));
    await post.save();
    res.send(post);
  } catch (err) {
    res.status(400).send(err);
  }
});

//delete a post of an owner 
router.delete("/api/posts/:postId", auth , async (req, res) => {
  const id = req.params.taskId;
  try {
    const post = await Post.findOneAndDelete({_id: id, owner: req.user._id});

    if (!post) {
      return res.status(404).send();
    }
    res.send(post);
  } catch (err) {
    res.status(500).send();
  }
});

module.exports = router;
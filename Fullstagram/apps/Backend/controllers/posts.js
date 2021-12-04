const { createPost } = require("../services/post");

async function create(req, res, next) {
  const post = await createPost({
   description: req.body.description,
   tags: req.body.tags,
   image: req.body.image,
   userName: req.headers.user
  });

  res.json(post);
}

module.exports = { create };

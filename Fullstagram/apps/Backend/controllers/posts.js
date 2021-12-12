const { createPost } = require("../services/post");

async function create(req, res, next) {
  const data = req.body
  const post = await createPost({
   description: data.description,
   tags: data.tags,
   image: data.image,
   userName: req.headers.user,
   location: data.location
  });

  res.json(post);
}

module.exports = { create };

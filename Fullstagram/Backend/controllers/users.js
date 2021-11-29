const { createUser } = require("../services/user");

async function create(req, res, next) {
  const user = await createUser({
    ...req.body,
    user: req.userId,
  });

  res.json(user);
}

module.exports = { create };

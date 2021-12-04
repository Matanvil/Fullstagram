const { createUser } = require("../services/user");

async function create(req, res) {
  const user = await createUser({
    ...req.body,
  });

  //1. create token
  //2. store token in db
  //3. set token on cookies
  
  res.json(user);
}

module.exports = { create };

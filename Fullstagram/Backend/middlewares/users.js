const { getUser } = require("../services/user");

const checkUser = async (req, res, next) => {
  const userId = req.headers["user-id"];
  const user = await getUser(userId);

  if (user) {
    req.userId = user._id;
    req.user = user;
  }
  next();
};

module.exports = { checkUser };

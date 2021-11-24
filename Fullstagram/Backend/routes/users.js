const { create } = require('../controllers/users')
const { checkUser } = require("../middlewares/users");

module.exports = (app) => {
  app.use(checkUser);
  app.post('/api/register', create);
};

const { create } = require('../controllers/users')
const { checkUser } = require("../middlewares/users");



module.exports = (app) => {
  app.post('/api/register', create);
  
};

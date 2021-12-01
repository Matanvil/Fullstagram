const { create } = require('../controllers/posts')

module.exports = (app) => {
  app.post('api/create-post', create);
  
};

const { create } = require('../controllers/posts')

module.exports = (app) => {
  app.post('/api/posts', create);
  
};

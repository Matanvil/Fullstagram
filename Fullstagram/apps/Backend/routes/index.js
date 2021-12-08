module.exports = (app) => {
  require("./users.js")(app);
  require("./upload.js")(app);
  require("./posts.js")(app);
};

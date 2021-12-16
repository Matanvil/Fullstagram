module.exports = (app) => {
  require("./user.js")(app);
  require("./upload.js")(app);
  require("./post.js")(app);
};

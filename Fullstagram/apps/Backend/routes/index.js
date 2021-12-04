module.exports = (app) => {
  require("./users.js")(app);
  require("./upload.js")(app);
};

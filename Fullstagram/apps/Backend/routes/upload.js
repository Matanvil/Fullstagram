const cloudinary = require("../services/couldinary");
const auth = require('../middlewares/auth')
const multer = require("multer");
const upload = multer({ dest: "/temp" });

module.exports = (app) => {
  app.post("/api/upload", auth, upload.single("file"), (req, res) => {
    const selectedFile = req.file
    cloudinary.uploader.upload(selectedFile.path, (err, result) => {
      if (err) {
        res.status(500).json(err);
      } else {
        res.status(200).json(result);
        res.body = JSON.stringify(result);
        console.log(result)
      }
    });
  });
};

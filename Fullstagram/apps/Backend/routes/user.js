const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const User = require("../models/user");

//signup 
router.post("/api/users", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    const token = await user.generateToken();
    res.status(201).send({ user, token });
  } catch (err) {
    res.status(400).send(err);
  }
});

//login 
router.post("/api/users/login", async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = await user.generateToken();
    res.send({ user, token });
  } catch (err) {
    console.log(err);
    res.status(400).send();
  }
});

//logout 
router.post("/api/users/logout", auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter(
      (token) => token.token !== req.token
    );
    await req.user.save();
    res.send();
  } catch (err) {
    res.status(500).send();
  }
});

//logout from all sessions 
router.post('/api/users/logoutAll', auth, async (req, res) => {
  try {
    req.user.tokens = []
    await req.user.save();
    res.send("logout of all users")
  } catch (err) {
    res.status(500).send();
  }
})

// view my profile
router.get("/api/users/me", auth, async (req, res) => {
  res.send(req.user);
});

//update user profile
router.patch("/api/users/me", auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdated = ["name", "email", "password", "age"];
  const isValid = updates.every((update) => allowedUpdated.includes(update));

  if (!isValid) {
    res.status(400).send({ error: "Invalid update" });
  }
  try {
    const user = req.user
    updates.forEach((update) => (user[update] = req.body[update]));
    await user.save();
    res.send(user);
  } catch (err) {
    res.status(400).send(err);
  }
});

//delete user profile
router.delete("/api/users/me", auth , async (req, res) => {
  try {
    await req.user.remove()
    res.send(req.user);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;

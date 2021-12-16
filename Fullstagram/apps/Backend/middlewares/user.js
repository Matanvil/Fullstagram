const jwt = require("jsonwebtoken");
const { getUser } = require("../services/user");

const TEN_MINUTES = 1000 * 60 * 10;

const checkUser = async (req, res) => {
  const token = req.cookies.token;

  // !token = status401
  if (!token) {
    return res.status(401);
  }

  // token = jwt.verify(token)
  let payload, createDate;
  try {
    payload = jwt.verify(token, process.env.JWT_SECRET);
    if (!payload) {
      throw new Error(`Invalid token`);
    }
    // token create date
    createDate = new Date(payload.created);
  } catch {
    // !jwt = status401
    return res.status(401);
  }
 
 // check token time from creation (<10 next()
  if (Date.now() - createDate < TEN_MINUTES) {
    req.user = payload.user;
    return next();
  } 

  //>10 validate with db
  const user = await getUser(payload.user._id)
  if (!(user &&
    user.authenticationMethod && 
    user.authenticationMethod.created === payload.created &&
    user.authenticationMethod.identifier === payload.identifier
    )) {
    return res.status(401)
  }


  
  // db token = (
  //1. create token
  //2. store token in db
  //3. set token on cookies
  //)

  // jwt payload: created, user{_id}, identifier
};

module.exports = { checkUser };

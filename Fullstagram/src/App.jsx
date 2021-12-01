import "./App.css";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Feed from "./Pages/Feed";
import UserProfile from "./Pages/UserProfile";
import NewPost from "./Components/Posts/NewPost";
import NewPostInfo from "./Pages/newPostInfo";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Fragment } from "react";

function App() {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);

  const checkUser = (email, password) => {
    console.log(email, password);
  };

  const registerUser = (user) => {
    console.log(user);
  };

  return (
    <Fragment>
      <Router>
        <Routes>
          {!isLoggedIn ? (
            <Route index element={<Login onUserLogin={checkUser} />} />
          ) : (
            <Route index element={<Feed />} />
          )}
          <Route path="feed" element={<Feed />} />
          <Route path="login" element={<Login onUserLogin={checkUser} />} />
          <Route path="register" element={<Register handleNewUser={registerUser} />} />
          <Route path="profile" element={<UserProfile />} ></Route>
          <Route path="/create/select-image" element={<NewPost />} />
          <Route path="/create/post-info" element={<NewPostInfo />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;

import "./App.css";
import Login from "./Pages/Login";
import Inbox from "./Pages/Inbox";
import Register from "./Pages/Register";
import Feed from "./Pages/Feed";
import UserProfile from "./Pages/UserProfile";
import NewPost from "./Components/Posts/NewPost";
import NewPostInfo from "./Pages/newPostInfo";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Fragment } from "react";

function App() {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);


  const checkUser = async (email, password) => {
    const loginUser = {
      email,
      password,
    };
    try {
      const response = await fetch("http://localhost:4000/api/users/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginUser),
      });
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.log("login failed");
    }
  };

  const registerUser = async (userInfo) => {
    const response = await fetch("http://localhost:4000/api/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });
    const data = await response.json();
    console.log(data);
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
          <Route
            path="register"
            element={<Register handleNewUser={registerUser} />}
          />
          <Route path="profile" element={<UserProfile />}></Route>
          <Route path="/create/select-image" element={<NewPost />} />
          <Route path="/create/post-info" element={<NewPostInfo />} />
          <Route path="/inbox" element={<Inbox />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;

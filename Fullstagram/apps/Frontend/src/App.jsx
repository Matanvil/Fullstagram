import "./App.css";
import Login from "./Pages/Login";
import Inbox from "./Pages/Inbox";
import Register from "./Pages/Register";
import Feed from "./Pages/Feed";
import UserProfile from "./Pages/UserProfile";
import NewPost from "./Components/Posts/NewPost";
import NewPostInfo from "./Pages/newPostInfo";

import checkUser from "./services/check-user";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Fragment, useEffect } from "react";

function App() {
  const navigate = useNavigate();

  useEffect(async () => {
    const response = await fetch("http://localhost:4000/api/users/me");
    const data = await response.json();
    if (data.err) {
      navigate('/login')
    }
  }, []);

  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="feed" element={<Feed />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="profile" element={<UserProfile />}></Route>
        <Route path="/create/select-image" element={<NewPost />} />
        <Route path="/create/post-info" element={<NewPostInfo />} />
        <Route path="/inbox" element={<Inbox />} />
      </Routes>
    </Fragment>
  );
}

export default App;

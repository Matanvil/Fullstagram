import "./App.css";
import Login from "./Pages/Login";
import Inbox from "./Pages/Inbox";
import Register from "./Pages/Register";
import Feed from "./Pages/Feed";
import UserProfile from "./Pages/UserProfile";
import NewPost from "./Components/Posts/NewPost";
import NewPostInfo from "./Pages/newPostInfo";
import { useDispatch, useSelector } from "react-redux";
import checkUser from './services/check-user'
import { Routes, Route, useNavigate } from "react-router-dom";
import { userActions } from "./store/user-slice";
import { Fragment, useEffect } from "react";

function App() {
  const user = useSelector(state => state.user)
  // const dispatch = useDispatch();

  
  // useEffect(async () => {
  //   const data = checkUser()
  //   dispatch(
  //     userActions.setUser({
  //       name: data.name,
  //       email: data.email,
  //       username: data.username,
  //     })
  //   );
  // },[])

  console.log(user)
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

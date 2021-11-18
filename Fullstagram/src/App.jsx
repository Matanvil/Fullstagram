import "./App.css";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Feed from "./Pages/Feed";
import UserProfile from "./Pages/UserProfile";
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
          <Route
            path="register"
            element={<Register handleNewUser={registerUser} />}
          />
          <Route
            path="profile"
            element={<UserProfile />}
          />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;

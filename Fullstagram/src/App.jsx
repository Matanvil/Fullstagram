import "./App.css";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Feed from "./Pages/Feed";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Fragment } from "react";

function App() {
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
          <Route index element={<Feed />} /> 
          <Route path="feed" element={<Feed />} />
          <Route path="login" element={<Login onUserLogin={checkUser} />} />
          <Route path="register" element={<Register handleNewUser={registerUser}/>} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;

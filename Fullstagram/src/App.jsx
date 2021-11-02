import "./App.css";
import Login from "./Pages/Login";
// import Register from "./Pages/Register";

function App() {
  const checkUser = (email, password) => {
    console.log(email, password);
  };

  const registerUser = (user) => {
    console.log(user);
  };

  return (
    <div>
      <Login onUserLogin={checkUser} />
      {/* <Register handleNewUser={registerUser} /> */}
    </div>
  );
}

export default App;

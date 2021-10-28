import "./App.css";
import Login from "./Pages/Login";

function App() {
  const checkUser = (email, password) => {
    console.log(email, password);
  };

  return (
    <div>
      <Login onUserLogin={checkUser} />
    </div>
  );
}

export default App;

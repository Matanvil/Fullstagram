import styles from "../Dist/login.module.css";
import Card from "../UI/Card";
import { useState } from "react";

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    // setEnteredPassword("");
    // setEnteredEmail("");
    props.onUserLogin(enteredEmail, enteredPassword);
  };

  return (
    <Card className={styles.card}>
      <h1>Fullstagram</h1>
      <form className={styles.login}>
        <label htmlFor="email">Email Address</label>
        <input
          value={enteredEmail}
          onChange={emailChangeHandler}
          name="email"
          placeholder="Please enter your Email address"
          type="text"
        ></input>
        <label htmlFor="password">Password</label>
        <input
          onChange={passwordChangeHandler}
          value={enteredPassword}
          name="password"
          type="password"
          placeholder="Please enter your password"
        ></input>
        <button onClick={onSubmitHandler} type="submit">
          Login
        </button>
      </form>
      <div>
        <p>
          Don't have an account?{" "}
          <a href="https://www.google.com">Sign Up Now</a>{" "}
        </p>
      </div>
    </Card>
  );
};

export default Login;

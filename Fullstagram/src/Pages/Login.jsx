import styles from "../Dist/login.module.css";
import Card from "../UI/Card";
import { useState } from "react";
import Button from "../UI/Button";
import InputField from "../UI/InputField";

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
    <div >
      <Card className={styles.card}>
        <h1 className={styles.logo}>Fullstagram</h1>
        <form className={styles.login}>
          <InputField
            className={styles.input}
            onChange={emailChangeHandler}
            value={enteredEmail}
            type="text"
            label="Phone number, username, or email"
          ></InputField>
          <InputField
            className={styles.input}
            onChange={passwordChangeHandler}
            value={enteredPassword}
            type="password"
            label="Password"
          ></InputField>
          <Button onClick={onSubmitHandler} type="submit" className={styles.button}>
            Login
          </Button>
        </form>
        <div className={styles.divider}>
            <hr className={styles.solid}></hr>
            <div>OR</div>
            <hr className={styles.solid}></hr>
          </div>
      </Card>
      <Card className={styles.card}>
        <div>
          <p>
            Don't have an account?{" "}
            <a href="https://www.google.com">Sign Up Now</a>{" "}
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Login;

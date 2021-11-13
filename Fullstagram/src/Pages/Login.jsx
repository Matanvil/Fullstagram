import styles from "../Dist/login.module.css";
import Card from "../UI/Card";
import { useState } from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import FacebookIcon from "@mui/icons-material/Facebook";

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
    props.onUserLogin(enteredEmail, enteredPassword);
  };

  return (
    <div>
      <Card className={styles.card}>
        <h1 className={styles.logo}>Fullstagram</h1>
        <form className={styles.login}>
          <TextField
            label="Phone number, username, or email"
            variant="outlined"
            type="text"
            className={styles.input}
            size="small"
            value={enteredEmail}
            onChange={emailChangeHandler}
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            className={styles.input}
            size="small"
            value={enteredPassword}
            onChange={passwordChangeHandler}
          />
          <Button
            variant="contained"
            type="submit"
            onClick={onSubmitHandler}
            className={styles.button}
          >
            Log In
          </Button>
          <div className={styles.divider}>
            <hr className={styles.solid}></hr>
            <div>OR</div>
            <hr className={styles.solid}></hr>
          </div>
          <div className={styles["btn-wrapper"]}>
            <button className={styles["facebook-btn"]}>
              <FacebookIcon color="primary" />
              <span>&nbsp; Log in with Facebook</span>
            </button>
          </div>
          <a href="https://www.facebook.com" className={styles.forgotLink}> Forgot password? </a>
        </form>
      </Card>
      <Card className={styles.card}>
        <div>
          <p>
            Don't have an account? <Link to="../register">Sign up</Link>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Login;

import styles from "../Dist/login.module.css";
import Card from "../UI/Card";
import { useState } from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import FacebookIcon from "@mui/icons-material/Facebook";
import loginUser from "../services/login-service";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const navigate = useNavigate();
  const [isError, useIsError] = useState(false)
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      const user = await loginUser(enteredEmail, enteredPassword);
      console.log(user)
      if (user === undefined) {
        console.log('user not found');
        useIsError('The Email or Password entered was not recognised, Please check and try again');
      } else {
        navigate("/feed");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Card className={styles.card}>
        <h1 className={styles.logo}>Fullstagram</h1>
        <form className={styles.login}>
          <p>{isError}</p> <br></br>
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
          <a href="https://www.facebook.com" className={styles.forgotLink}>
            {" "}
            Forgot password?{" "}
          </a>
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

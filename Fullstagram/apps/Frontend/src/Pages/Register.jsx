import Card from "../UI/Card";
import styles from "../Dist/login.module.css";
import styled from "styled-components";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useState } from "react";
import regiserUser from '../services/register-service'
import { useNavigate } from 'react-router-dom';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 20px;
  justify-content: space-between;
  align-items: center;

  .input-fields {
    width: 80%;
    margin: 0px 30px 7px 30px;
    background-color: rgb(250, 250, 250);
  }

  .button {
    margin: 8px 0 15px 0;
    width: 80%;
  }

  .divider {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    font-size: 13px;
    font-weight: 500;
    color: rgb(142, 142, 142);
    margin: 10px 0 10px 0;
  }

  .divider .solid {
    border-bottom: 1px solid #ccc;
    height: 10px;
    overflow: visible;
    padding: 0;
    color: rgb(7, 6, 6);
    text-align: center;
    width: 30%;
    border-left: none;
    border-right: none;
    border-top: none;
  }
`;

const Register = (props) => {
  const navigate = useNavigate()
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredFullname, setEnteredFullname] = useState("");
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const emailchangeHandler = (e) => {
    setEnteredEmail(e.target.value);
  };

  const fullnamechangeHandler = (e) => {
    setEnteredFullname(e.target.value);
  };

  const usernamechangeHandler = (e) => {
    setEnteredUsername(e.target.value);
  };

  const passwordchangeHandler = (e) => {
    setEnteredPassword(e.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const newUserInfo = {
      email: enteredEmail,
      name: enteredFullname,
      username: enteredUsername,
      password: enteredPassword,
    };
    regiserUser(newUserInfo);
    navigate('/feed')
  };

  return (
    <div className="card-wrapper">
      <Card className={styles.card}>
        <h1 className={styles.logo}>Fullstagram</h1>
        <StyledForm onSubmit={onSubmitHandler}>
          <h2 className={styles["register-descrpition"]}>
            Sign up to see photos and videos from your friends.
          </h2>
          <Button className="button" variant="contained">
            <FacebookIcon sx={{ color: "white" }} />
            <span> &nbsp; Login with Facebook</span>
          </Button>
          <div className="divider">
            <hr className="solid"></hr>
            <div>OR</div>
            <hr className="solid"></hr>
          </div>
          <TextField
            className="input-fields"
            type="text"
            variant="outlined"
            size="small"
            label="Mobile Number or Email"
            value={enteredEmail}
            onChange={emailchangeHandler}
          />
          <TextField
            className="input-fields"
            type="text"
            variant="outlined"
            size="small"
            label="Full Name"
            value={enteredFullname}
            onChange={fullnamechangeHandler}
          />
          <TextField
            className="input-fields"
            type="text"
            variant="outlined"
            size="small"
            label="Username"
            value={enteredUsername}
            onChange={usernamechangeHandler}
          />
          <TextField
            className="input-fields"
            type="password"
            variant="outlined"
            size="small"
            label="Password"
            value={enteredPassword}
            onChange={passwordchangeHandler}
          />
          <Button className="button" variant="contained" type="submit">
            Sign up
          </Button>
          <p>
            By signing up, you agree to our
            <a href="http:///"> Terms </a> ,<a href="http:///">Data Policy </a>{" "}
            and
            <a href="http:///"> Cookies Policy</a>
          </p>
        </StyledForm>
      </Card>
      <Card className={styles.card}>
        <p>Have an account? </p>
        <Link to="../login">Login</Link>
      </Card>
    </div>
  );
};

export default Register;

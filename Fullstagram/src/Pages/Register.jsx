import Card from "../UI/Card";
import styles from "../Dist/login.module.css";
import classes from "styled-components";
import { useRef } from "react";
import {Link} from 'react-router-dom'

const StyledForm = classes.form`
    display: flex;
    flex-direction: column;
    margin: 20px;
    width: 35%;
`;

const Register = (props) => {
  const enteredEmailRef = useRef();
  const enteredFullnameRef = useRef();
  const enteredUsernameRef = useRef();
  const enteredPasswordRef = useRef();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = enteredEmailRef.current.value;
    const enteredFullname = enteredFullnameRef.current.value;
    const enteredUsername = enteredUsernameRef.current.value;
    const enteredPassword = enteredPasswordRef.current.value;
    const newUserInfo = {
      email: enteredEmail,
      name: enteredFullname,
      username: enteredUsername,
      password: enteredPassword,
    };
    props.handleNewUser(newUserInfo);
  };

  return (
    <div>
      <Card className={styles.card}>
        <h1>Fullstagram</h1>
        <StyledForm onSubmit={onSubmitHandler}>
          <h2>Sign up to see photos and videos from your friends.</h2>
          <button>Login with Facebook</button>
          <div>
            <div>----</div>
            <div>or</div>
            <div>---</div>
          </div>
          <input
            type="text"
            placeholder="Mobile Number or Email"
            ref={enteredEmailRef}
          />
          <input type="text" placeholder="Full Name" ref={enteredFullnameRef} />
          <input type="text" placeholder="Username" ref={enteredUsernameRef} />
          <input
            type="password"
            placeholder="Password"
            ref={enteredPasswordRef}
          />
          <button type="submit">Sign up</button>
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
        <Link to='../login'>Login</Link>
      </Card>
    </div>
  );
};

export default Register;

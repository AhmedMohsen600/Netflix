import React, { useContext, useState } from "react";
import { Form } from "../components";
import { useHistory } from "react-router-dom";
import * as ROUTES from "../constant/route";
import { Link } from "../components/form/styles/form";
import { FirebaseContext } from "../context/firebase";
import { FooterContainer } from "../containers/footer";
import { HeaderContainer } from "../containers/header";

export default function Signup() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [firstName, setFirstName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const isInValid = firstName === "" || password === "" || emailAddress === "";

  const handelSignUp = (e) => {
    e.preventDefault();
    // do firebase stuff here for singup.
    firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then((data) => {
        data.user.updateProfile({
          displayName: firstName,
          photoURL: Math.floor(Math.random() * 5) + 1,
        });
      })
      .then(() => {
        history.push(ROUTES.BROWSE);
      })
      .catch((error) => {
        // display the error message
        setFirstName("");
        setEmailAddress("");
        setPassword("");
        setError(error.message);
      });
  };
  return (
    <>
      <HeaderContainer>
        <Form>
          {error && <Form.Erorr>{error}</Form.Erorr>}
          <Form.Title>SIGN UP</Form.Title>
          <Form.Base onSubmit={handelSignUp} method="POST">
            <Form.Input
              onChange={({ target }) => setFirstName(target.value)}
              value={firstName}
              placeholder="First name"
              type="text"
            />
            <Form.Input
              onChange={({ target }) => setEmailAddress(target.value)}
              type="email"
              value={emailAddress}
              placeholder="email address"
            />
            <Form.Input
              onChange={({ target }) => setPassword(target.value)}
              placeholder="Password"
              autoComplete="off"
              type="password"
              value={password}
            />
            <Form.Submit type="submits" disabled={isInValid}>
              Sign Up
            </Form.Submit>
          </Form.Base>
          <Form.Text>
            Already user? <Link to="/signin">Sign in now</Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn more.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}

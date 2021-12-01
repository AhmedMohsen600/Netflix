import React, { useContext, useState } from "react";
import { Form } from "../components";
import { useHistory } from "react-router-dom";
import * as ROUTES from "../constant/route";
import { Link } from "../components/form/styles/form";
import { FirebaseContext } from "../context/firebase";
import { FooterContainer } from "../containers/footer";
import { HeaderContainer } from "../containers/header";

export default function Signin() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [emailAdress, setEmailAdress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setErorr] = useState("");
  const isInValid = password === "" || emailAdress === "";
  const handelSignIn = (e) => {
    e.preventDefault();
    // fire base work here.
    firebase
      .auth()
      .signInWithEmailAndPassword(emailAdress, password)
      .then(() => {
        // if succefully go to browse page.
        history.push(ROUTES.BROWSE);
      })
      .catch((error) => {
        // if rejected display the erorr message here.
        setEmailAdress("");
        setPassword("");
        setErorr(error.message);
      });
  };
  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>SIGN IN</Form.Title>
          {error && <Form.Erorr>{error}</Form.Erorr>}
          <Form.Base onSubmit={handelSignIn} method="POST">
            <Form.Input
              id="first"
              placeholder="Email adress"
              value={emailAdress}
              onChange={({ target }) => setEmailAdress(target.value)}
            />
            <Form.Input
              type="password"
              placeholder="Password"
              autoComplete="off"
              id="second"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit type="submit" disabled={isInValid}>
              Sign In
            </Form.Submit>
          </Form.Base>
          <Form.Text>
            New to netflix? <Link to="/signup">Signup</Link>
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

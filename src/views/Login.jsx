import React from "react";
import styled from "styled-components";
import {
  buttons,
  layouts,
  basicInputs,
  useInput,
} from "../styles/themeHandler";
import axios from "axios";

function Login() {
  const email= useInput("");
  const password = useInput("");

  const TryLogin = () => {
    const user = {
      email: email.value,
      password: password.value,
    };
    axios.post(window.apiUrl+"Login", user).then((res) => {
      alert(res.data.message);
      console.log(res.data)
    });
  };

  return (
    <LoginContainer>
      <div className="inner">
        <h1>Login</h1>
        <label for="email">email:</label>
        <basicInputs.TextNumber
          width="350px"
          type="email"
          id="email"
          name="email"
          onChange={email.onChange}
        />
        <label for="password">password :</label>
        <basicInputs.TextNumber
          width="350px"
          type="password"
          id="password"
          name="password"
          onChange={password.onChange}
        />

        <div className="group">
          <buttons.Highlight form="loginform" type="submit" onClick={TryLogin}>
            {" "}
            Login
          </buttons.Highlight>
        </div>
      </div>
    </LoginContainer>
  );
}

export default Login;

const LoginContainer = styled(layouts.ContainerSolid)`
  width: 33vw;
  min-width: fit-content;
  height: fit-content;
  margin: 22vh 33vw 25vh 33vw;
  h1{
    margin-left: 32%;
    margin-bottom: 15px;
  }
`;

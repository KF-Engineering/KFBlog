
import React, { useState } from "react";
import styled from "styled-components";
import {
  buttons,
  layouts,
  basicInputs,
  useInput,
  inputs
} from "../styles/themeHandler";
import axios from "axios";

function Register() {
  const email= useInput("");
  const password = useInput("");
  const passwordtwo = useInput("");
  const [UserType, setUserType] = useState("");

  const TryRegister = () => {
    if (password === passwordtwo){
    alert("password not matching")
    return;
}
    const user = {
      email: email.value,
      password: password.value,
      UserType: UserType
    };
    console.log(user)
    axios.post(window.apiUrl+"Register", user).then((res) => {
      alert(res.data.message);
    });
  };

  return (
    <RegisterContainer>
      <div className="inner">
        <h1>Register</h1>
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

        <label for="password">re-enter your password :</label>
        <basicInputs.TextNumber
          width="350px"
          type="password"
          id="passwordtwo"
          name="passwordtwo"
          onChange={passwordtwo.onChange}
        />
        <label for="password">Enter a UserType:</label>
        <inputs.SelectCustom
          initialValue={["private"]}
          options={["private", "private", "admin", "author"]}
          callback={setUserType}
          onSelect={setUserType}
        />
        <div className="group">
          <buttons.Highlight form="Registerform" type="submit" onClick={TryRegister}>
            {" "}
            Register
          </buttons.Highlight>
        </div>

      </div>
    </RegisterContainer>
  );
}

export default Register;

const RegisterContainer = styled(layouts.ContainerSolid)`
  width: 33vw;
  min-width: fit-content;
  height: fit-content;
  margin: 22vh 33vw 25vh 33vw;
  h1{
    margin-left: 32%;
    margin-bottom: 15px;
  }
  .SelectionContainer{
    padding-right: 10px;
  }
`;

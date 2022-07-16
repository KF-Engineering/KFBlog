import React from "react";
import styled from "styled-components";
import { Formik, Form} from "formik";
import { buttons, layouts, basicInputs} from "../../themeHandler";

const LoginModal = () => {
  let dispatch = useDispatch();


  return (
  <LoginModalContainer width="450px" height="350px">
        <Formik
          initialValues= {{
            type: "GetToken#",
            customer: "rtb4free",
            username: "m@maettaan.com",
            password: "dsp",
          }}
          validationSchema={Yup.object({})}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              
            }, 400);
          }}
        >
          <Form>
            <label for="customer">organization :</label>
            <basicInputs.TextNumber
              width="350px"
              type="text"
              id="customer"
              name="customer"
            />
            <label for="email">email :</label>
            <basicInputs.TextNumber
              width="350px"
              type="email"
              id="email"
              name="email"
            />
            <label for="password">password :</label>
            <basicInputs.TextNumber
              width="350px"
              type="password"
              id="password"
              name="password"
            />

            <div className="group">
              <buttons.Highlight
                form="loginform"
                type="submit"
              >
                {" "}
                Login
              </buttons.Highlight>
            </div>
          </Form>
        </Formik>
      </LoginModalContainer>
  );
};

export default LoginModal;

const LoginModalContainer = styled.div`
  margin-top: 25px;
  form {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-apart;
  }
  button{
    margin-top: 20px;
  }
`;

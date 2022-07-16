
import { basic } from "../themeHandler";

import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import styled from "styled-components";
import { Formik, Form, useField } from "formik";



const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="MytexInput">
      <label htmlFor={props.id || props.nme}>{label}</label>
      <basic.InptNbrTxt className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};



function InputTextToList({ setInputTextToList, InputTextToList }) {
  const [InputTextToLists, setInputTextToLists] = useState(InputTextToList);
  const [rerender, setRerender] = useState(false);
  useEffect(() => {
    setRerender(!rerender);
    console.log("rerender");
  }, [InputTextToLists]);

  const handleAddItem = (value) => {
    var items = InputTextToLists;
    if (typeof(items) == 'undefined'){
      items=[];
    }
    
    items.push(value.InputTextToList);
    setInputTextToLists(items);
    if(typeof(setInputTextToList)== "function"){
    setInputTextToList(items);}

    console.log(InputTextToLists);
    console.log(InputTextToLists.length);
    setRerender(!rerender);
  };

  const handleRemoveItem = (value) => {
    console.log(value);

    function checkequals(el) {
      console.log(el);
      console.log(value);
      console.log(el == value);
      return el !== value;
    }

    setInputTextToLists((list) => list.filter(checkequals));

    console.log(InputTextToLists);
  };

  return (
    <InputTextToListContainer className="InputTextToListCreator">
    
    <div className="topSection">
      <Formik
        initialValues={{
          InputTextToList: "",
        }}
        validationSchema={Yup.object({
          InputTextToList: Yup.string()
            .required("Required")
        })}
        onSubmit={(values, { setSubmitting }) => {
          handleAddItem(values);
        }}
      >
        <StyledFormikForm>
          <MyTextInput
                      name="InputTextToList"
                      type="text"
                      placeholder="Enter an Item"
                    />
          <basic.BAddNw type="submit">Add</basic.BAddNw>
        </StyledFormikForm>
      </Formik>
      </div>
      <div className="AddListLower">
      {InputTextToLists?.map((InputTextToList, index) => (
                  
                  <basic.BRmv onClick={() => handleRemoveItem(InputTextToList)}>
                    {InputTextToList}
                  </basic.BRmv>
            ))}

      </div>
     
    </InputTextToListContainer>
  );
}

export default InputTextToList;

const InputTextToListContainer = styled.div`
  margin-top: 2%;
  border-radius: 5px;
  border: 2px solid var(--backgroundTextColor);
  width: ${(props) => (props.width ? props.width : "325px")};
  height: ${(props) => (props.height ? props.height : "380px")};
  display: flex;
  flex-direction: column;
 
  .topSection{
    margin-top: 5px;
    margin-left: 5px;
    width: 98%;
    height: 70px;
    border-bottom: 2px solid var(--seperatorColor);
     
  
  }
  .AddListLower{
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    margin-top: 10px;
    margin-left: 10px;
    width: 100%;

  }

`;



const StyledFormikForm = styled(Form)`
width: 95%;
display: flex;
align-items: start;

button{
  margin-left: 10px;
}

.error{
  font-size: 12px;
  color: var(--alertColor)
}

`
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { buttons} from "../themeHandler";

function InputMultiSelect({
  textList = [],
  elementIds = [],
  callback = "",
  initialOn = [],
  ElementsperRow = 3,
  initialValue = [],
}) {
  const [actives, setactives] = useState(initialOn);
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    var els = [];

    elementIds.map((el, index) => {
      els.push(false);
      initialValue.map((element, i) => {
        if (el === element) {
          els[index] = true;
        }
      });
    });

    setactives(els);
  }, []);//eslint-disable-line

  const update = (index) => {
    const els = actives;
    els[index] = !els[index];
    setactives(els);
    setRerender(!rerender);

    const forReturn = [];

    for (let index = 0; index < actives.length; index++) {
      if (actives[index]) {
        forReturn.push(elementIds[index]);
      }
    }

    if (typeof callback == "function") {
      callback(forReturn);
    }
    console.log(forReturn);
  };

  useEffect(() => {}, [rerender]);

  const indices = textList.map((text, index) => (
    <>
      <buttons.Modest
        type="button"
        active={actives[index]}
        onClick={() => update(index)}
      >
        {text}
      </buttons.Modest>
    </>
  ));

  return <InputMultiSelectContainer>{indices}</InputMultiSelectContainer>;
}

export default InputMultiSelect;

const InputMultiSelectContainer = styled.div`
  width: 101%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  button {
    min-height: 40px;
    margin: 0px 0px 10px 5px;
    width: 31%;
  }
  br {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const FormMultiSelect= ({
  label,
  field,
  // { name, value, onChange, onBlur}
  form, // { touched, errors}
  ...props
}) => {
  const handleChange = (e) => {
    if (typeof field.onChange == "function") {
      console.log("SSPEXCHANGE fields.onchange");
      console.log("field name: " + field.name);
      console.log("current value: " + JSON.stringify(e));
      form.setFieldValue(field.name, e);
    } else {
      console.log("fields.Onchange is not a function");
    }
    console.log("form.touched");
    console.log(form.touched);
    console.log("form.errors");
    console.log(form.errors);
  };
  return (
    <div className="SSPEXCHANGE">
      <label htmlFor={field.name || props.nme}>{label}</label>
      <InputMultiSelect
        name={field.name}
        id={field.name}
        className="form-control"
        textList={[
          "Google",
          "IQ Digital",
          "Stroer",
          "Yieldlab",
          "IQ Digital ECO",
          "Stroer ECO",
        ]}
        elementIds={[
          "Google",
          "IQDigital",
          "Stroer",
          "Yieldlab",
          "IQDigitalECO",
          "StroerECO",
        ]}
        initialValue={field.value}
        ElementsperRow={3}
        {...field}
        {...props}
        callback={handleChange}
      />

      {form.touched && form.errors ? (
        <div className="error">{form.errors.sspexchange}</div>
      ) : null}
    </div>
  );
};
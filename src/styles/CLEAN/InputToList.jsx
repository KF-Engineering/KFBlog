import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { basicInputs, buttons, icons } from "../themeHandler";
export default function InputToList({
  rows = 4,
  cols = 3,
  width = "300px",
  height = "200px",
  callBack = "",
  initialValues,
}) {
  const [selected, setselected] = useState(initialValues);
  const [rerender, setrerender] = useState(false);
  const [currenInputValue, setCurrentInputValue] = useState("");


  useEffect(() => {
    setselected(initialValues)
  }, [initialValues])
  

  const addItem = (e) => {
    var items = selected;
    items.push(currenInputValue);
    items = [...new Set(items)];
    setselected(items);
    setrerender(!rerender);
    callBack(items);
  };
  

  const handleChange = (e) => {
    const value = e.target.value;
    setCurrentInputValue(value);
  };

  const removeItem = (el) => {
    var removeValue = el;
    var items = selected;
    const newitems = [];
    for (var i in items) {
      if (items[i] === removeValue) continue;
      newitems.push(items[i]);
    }
    setselected(newitems);
    setrerender(!rerender);
    callBack(newitems);
    
  };

  return (
    <div>
      <Container width={width}>
        <div className="inpflex">
          <basicInputs.TextNumber
            className="inp"
            onChange={(e) => handleChange(e)}
            type={"text"}
            placeholder="enter text"
          />
          <buttons.Highlight type='button' className="btn" onClick={() => addItem()}>
            Add
          </buttons.Highlight>
        </div>
        {selected.map((el) => (
          <buttons.Normal type='button' key={Object.keys(el)} onClick={() => removeItem(el)}>
            {el}
            <icons.X />
          </buttons.Normal>
        ))}
      </Container>
    </div>
  );
}

const Container = styled.div`
  margin: 5px 5px 5px 5px;
  border-radius: 5px;
  border: 2px solid var(--seperatorColor);
  width: ${(props) => (props.width ? props.width : "500px")};
  height: ${(props) => (props.height ? props.height : "fit-content")};
  align-items: center;
  padding: 2%;
  .inpflex {
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: space-between;
    .inp {
      flex-grow: 1;
    }
    .btn {
      max-width: 120px;
      display: flex;
      justify-content: space-around;
    }
  }
`;


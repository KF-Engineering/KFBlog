import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { basic } from "../themeHandler";


function InputSingleSelect({
  textList = [],
  elementIds = [],
  callback,
  initialOn = [],
  initialValue = "",
  ElementsperRow = 0,
  buttonType = "Modest",
  buttonWidth = "110px",
  selectNone = false,
  isAvailable = [],
  iconList = [],
  ...props
}) {
  const [actives, setactives] = useState(initialOn);
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    elementIds.forEach((el, index) => {
      if (el === initialValue) {
        update(index);
      }
    });
    CalcButtonWidth(ElementsperRow);
    // eslint-disable-next-line
  }, []);

  const update = (index) => {
    var els = [];
    CalcButtonWidth(ElementsperRow);

    setRerender(!rerender);

    for (let it = 0; it < elementIds.length; it++) {
      if (it === index) {
        if (selectNone) {
          els.push(!actives[it]);
        } else {
          els.push(true);
        }
      } else {
        els.push(false);
      }
    }

    setactives(els);

    console.log(elementIds[index]);
    if (
      typeof callback == "function" &&
      (selectNone ? !actives[index] : true)
    ) {
      // && !actives[index])
      callback(elementIds[index]);
    } else {
      callback(null);
    }

    setRerender(!rerender);
  };

  useEffect(() => {}, [rerender]);

  function CalcButtonWidth(ElementsperRow) {
    switch (ElementsperRow) {
 
      case 1:
        return "90%";
    
      case 2:
        return "45%";
      case 3:
        return "31%";
      default:
        return "50px";
      }
  }

  const buttons = textList.map((text, index) => (
    <>
      {buttonType === "Modest" && (
        <buttons.Modest
          type="button"
          active={actives[index]}
          onClick={() => update(index)}
          width={CalcButtonWidth(ElementsperRow)}

        >
          {text}
        </buttons.Modest>
      )}
      {buttonType === "BIcn" && (
        <basic.BIcn
          type="button"
          text={text}
          active={actives[index]}
          Icon={iconList[index]}
          Expandable={true}
          isAvailable={isAvailable[index]}
          onClick={() => update(index)}
          width={CalcButtonWidth(ElementsperRow)}
        />
      )}
    </>
  ));

  return (
    <InputSingleSelectContainer justifyContent={props.justifyContent}>
      {buttons}
    </InputSingleSelectContainer>
  );
}

export default InputSingleSelect;

const InputSingleSelectContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "space-between"};
`;

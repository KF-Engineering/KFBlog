

import React, { useState, useEffect } from "react";
import styled from "styled-components";

export const GlobalSelector = ({
  onSelect,
  Placeholder = "Select Theme",
  AvailableThemes = [],
  initialindex = 0,
  initialValue = "CLEAN",
  maxDropDownHeight = "inherit",
  maxDropDownWidth = "inherit",
  ...field
}) => {

  //console.groupColorlapsed(field.value);

  let [isDropMenu, setDropMenu] = useState(false);
  
  let [data, setData] = useState(initialValue ? initialValue : Placeholder);
  const SetData = (data) => {
    setData(data);
    setDropMenu(false);
window.$theme =data;
const App = document.getElementById("App")
App.className=window.$theme;
console.log("theme Changes: Hot Reload: " + window.$theme)

  
  };

  useEffect(() => {
    
  }, [data]);

  return (
    <SelectionContainer className="SelectionContainer">
      <section
        id={data === Placeholder ? "placeholder" : ""}
        onClick={() => setDropMenu(!isDropMenu)}
      >
        {data}
        {isDropMenu && (
          <article>
            {AvailableThemes?.map((option) => (
              <div onClick={() => SetData(option)} Id="ThemeChange" key={option} >
                {option}
              </div>
            ))}
          </article>
        )}
      </section>
    </SelectionContainer>
  );
};

const SelectionContainer = styled.div`
  width: ${(props) => (props.width ? props.width : " 100%")};
  height: ${(props) => (props.height ? props.height : " 40px")};
  margin: 5px 5px 5px 0px;
  border-radius: 10px;
  color: var(--containerTextColor);
  :hover {
    background: var(--backgroundHoverColor);
  }
  #placeholder {
    color: grey;
  }

  section {
    // A reset of styles, including removing the default dropdown arrow

    width: 100%;
    height: 100%;
    appearance: none;
    border: none;
    cursor: pointer;
    line-height: inherit;
    background: var(--containerLightColor);

    color: var(--containerTextColor);
    border-radius: 10px;
    text-indent: 10px;

    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .arrowUp {
      transform: translateY(-50%) rotate(180deg);
    }
    img {
      transition: 0.3s;
      position: absolute;
      top: 50%;
      right: 10%;
      transform: translateY(-50%);
      width: 15px;
      height: 15px;
    }
    article {
      z-index: 1;
      background: var(--containerSolidColor);
      width: ${(props) =>
        props.maxDropDownWidth ? props.maxDropDownWidth : "100%"};
      height: ${(props) =>
        props.maxDropDownHeight ? props.maxDropDownHeight : "fit-conent"};
      position: absolute;
      top: 115%;
      left: 0;
      border: 0.3px solid var(--highlightColor);
      border-radius: 10px;
      display: flex;
      justify-content: start;
      flex-direction: row;
      align-items: center;
      flex-wrap: wrap;
      .SelectionOption {
        :first-child {
          display: none;
        }
        padding: 0px 10px 0px 5px;
        z-index: 11;
        margin: 1px 1px 1px 1px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-items: left;
        width: fit-content;
        background: var(--containerSolidColor);
        color: var(--containerTextColor);
        border-radius: 10px;

        height: 40px;
        :hover,
        :focus {
          background: var(--highlightColor);
        }
      }
    }
  }
`;

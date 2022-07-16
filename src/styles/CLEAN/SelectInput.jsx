import { useState, useEffect } from "react";
import styled from "styled-components";
import {icons,buttons} from "../themeHandler";

const SelectInput = ({
  onSelect,
  Placeholder = [],
  options = [],
  initialindex = 0,
  initialValue = "",
  maxDropDownHeight = "inherit",
  maxDropDownWidth = "inherit",
  callback = "",
  ...field
}) => {
  
  const optionsAll = Placeholder.concat(options);

  //console.groupColorlapsed(field.value);

  let [isDropMenu, setDropMenu] = useState(false);
  let [data, setData] = useState(initialValue ? initialValue : Placeholder[0]);
  const [rerender, setrerender] = useState(true);
  
  
  
  
  const SetData = (data) => {
    setData(data);
    setDropMenu(false);
    if (typeof onSelect == "function") {
      onSelect(data);
    } else {
      console.log("callback is not a function");
    }
  };

  useEffect(() => {
    if (typeof callback == "function") {
      callback(data);
    }
    //eslint-disable-next-line
  }, [data]);

  const onmouseleave = () =>{
    setDropMenu(false);
    setrerender(!rerender);
  }
  useEffect(() => {
  }, [rerender])
  

  return (
    <SelectionContainer className="SelectionContainer" expanded={isDropMenu} onMouseLeave = {() => onmouseleave()}>
      <section
        id={data === Placeholder ? "placeholder" : ""}
        onClick={() => setDropMenu(!isDropMenu)}
      >
        {data}
        <icons.Arrow />
        {isDropMenu && (
          <article>
            {optionsAll?.map((option) => (
              <buttons.Dropdown onClick={() => SetData(option)} >
                {option}
              </buttons.Dropdown>
            ))}
          </article>
        )}
      </section>
    </SelectionContainer>
  );
};
export default SelectInput;

const SelectionContainer = styled.div`
  width: ${(props) => (props.width ? props.width : " 100%")};
  height: ${(props) => (props.height ? props.height : " 40px")};
  margin: 5px 5px 5px 0px;
  border-radius: 10px;
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
    border-radius: 10px;
    text-indent: 10px;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px 5px 5px 5px;

    span{
      transform :${(props) => (props.expanded ? "rotate(90deg) translateY(90%)": "rotate(270deg) translateY(-50%)")};
      }
    
   
    article {
      width: 100%;
      background-color: var(--normalColor);
      height: ${(props) =>
      props.maxDropDownHeight ? props.maxDropDownHeight : "fit-conent"};
      position: absolute;
      top: 100%;
      left: 0;
      padding: 5px 0px 5px 0px;
      button {
        :first-child {
          display: none;
        }
          font-size: inherit;
    
      }
    }
  }
`;

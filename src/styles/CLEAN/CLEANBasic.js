import styled, { css } from "styled-components";
import SelectInput from "./SelectInput";
import InputToggle from "./InputToggle";

const CLEAN_Basic= {
 
  InptSlct: styled.div`
    width: ${(props) => (props.width ? props.width : " 100% ")};
    height: ${(props) => (props.height ? props.height : " 40px")};
    margin: 5px 5px 5px 5px;
    background: var(--containerLightColor);
    border-radius: var(--buttonBorderRadius) ;
    color: var(--containerTextColor);

    select {
      -moz-appearance: none;
      -webkit-appearance: none;
      appearance: none;
      // A reset of styles, including removing the default dropdown arrow

      width: 100%;
      height: 100%;
      appearance: none;
      background-color: transparent;
      border: none;
      cursor: pointer;
      line-height: inherit;

      color: var(--containerTextColor);
      border-radius: var(--buttonBorderRadius) ;
      text-indent: 10px;


      option {
        //https://stackoverflow.com/questions/7208786/how-to-style-the-option-of-an-html-select-element
        background: var(--containerSolidColor);

        color: var(--containerTextColor);
        border-radius: var(--buttonBorderRadius) ;
        text-indent: 10px;

        :hover + :focus {
          background: var(--highlightColor);
        }
      }
    }
  `,
  
};

export default CLEAN_Basic;

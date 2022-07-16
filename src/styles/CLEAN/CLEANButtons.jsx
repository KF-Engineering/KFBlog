import styled, { css } from "styled-components";
import { Link as routerLink } from "react-router-dom";
import { Link as scrollLink } from "react-scroll";
const StandartButton = styled.button`
  width: ${(props) => (props.width ? props.width : "120px")};
  height: ${(props) => (props.height ? props.height : "fit-content")};
  min-width: fit-content;
  min-height: fit-content;

  text-decoration: none;
  border: solid var(--buttonBorderThickness) var(--seperatorColor);
  border-radius: var(--buttonBorderRadius);
  margin: 5px 5px 5px 5px;
  padding: 7px 10px 7px 10px;
  display: flex;
  justify-content: space-around;
  


  :hover {
    transition: all 0.05s ease-in-out;
    cursor: pointer;
    filter: contrast(150%) brightness(90%);
  }
  ${(props) =>
    props.active === true &&
    css`
      border: solid var(--buttonBorderThickness) var(--highlightColor);
      filter: contrast(100%) saturate(120%)
        drop-shadow(2px 2px 2px var(--shadowColor));
      :hover {
        filter: brightness(90%) contrast(120%) saturate(150%)
          drop-shadow(2px 2px 2px var(--shadowColor));
      }
    `}
  ${(props) =>
    props.disable === true &&
    css`
      min-width: fit-content;
      height: ${(props) => (props.height ? props.height : "40px")};
      filter: brightness(20%) blur(0.5px);
      width: inherit;
      height: inherit;
      pointer-events: none;
    `}
`;
export const CLEANButtons = {
  Modest: styled(StandartButton)`
    color: var(--modestTextColor);
    background-color: var(--modestColor);
    border-color: var(--modestTextColor);
  `,
  Normal: styled(StandartButton)`
    background-color: var(--normalColor);
    color: var(--normalTextColor);
    border-color: var(--normalTextColor);
  `,
  Highlight: styled(StandartButton)`
    background-color: var(--highlightColor);
    color: var(--highlightTextColor);
    border-color: var(--highlightTextColor);
  `,
  Alert: styled(StandartButton)`
    background-color: var(--alertColor);
    color: var(--normalTextColor);
    border-color: var(--contrastColor);
  `,
  Negative: styled(StandartButton)`
    background-color: var(--NegativeColor);
    color: var(--NegativeTextColor);
    border-color: var(--NegativeTextColor);
  `,
 Dropdown: styled(StandartButton)`
 width: 100%;
 background-color: var(--normalColor);
      border: none;
      margin: none;
      display: flex;
      margin: -2.5px 0px -2.5px 0px;
      border-radius: 6px;
      padding: 10px 5px 5px 10px;
 :hover {
      transition: all 0.05s ease-in-out;
      cursor: pointer;
    }
  `,
  LinkButton: styled(StandartButton)`
    border: none;
    border-radius: 0px;
      transform: none;
    :hover {
      background-color: inherit;
      filter: contrast(200%);
      border-radius: 0px;
      border-bottom: solid var(--buttonBorderThickness) var(--seperatorColor);
      transition: none;
      transform: none;
    }
  `,
  LinkScroll: styled(scrollLink)`
    width: ${(props) => (props.width ? props.width : "120px")};
    height: ${(props) => (props.height ? props.height : "40px")};
    min-width: fit-content;
    min-height: fit-content;

    border: none;
    text-decoration: none;
    margin: 5px 5px 5px 5px;
    padding: 12px 10px 5px 10px;

    :hover {
    border-bottom: solid var(--buttonBorderThickness) var(--seperatorColor);
      transition: all 0.05s ease-in-out;
      cursor: pointer;
      filter: contrast(150%) brightness(90%);
    }
    ${(props) =>
      props.active === true &&
      css`
        border: solid var(--buttonBorderThickness) var(--highlightColor);
        filter: contrast(100%) saturate(120%)
          drop-shadow(2px 2px 2px var(--shadowColor));
        :hover {
          filter: brightness(90%) contrast(120%) saturate(150%)
            drop-shadow(2px 2px 2px var(--shadowColor));
        }
      `}
    ${(props) =>
      props.disable === true &&
      css`
        min-width: fit-content;
        height: ${(props) => (props.height ? props.height : "40px")};
        filter: brightness(20%) blur(0.5px);
        width: inherit;
        height: inherit;
        pointer-events: none;
      `}
  `,
  LinkRouter: styled(routerLink)`
    width: ${(props) => (props.width ? props.width : "120px")};
    height: ${(props) => (props.height ? props.height : "40px")};
    min-width: fit-content;
    min-height: fit-content;

    border: none;
    text-decoration: none;
    margin: 5px 5px 5px 5px;
    padding: 12px 10px 5px 10px;

    :hover {
      transition: all 0.05s ease-in-out;
    border-bottom: solid var(--buttonBorderThickness) var(--seperatorColor);
      cursor: pointer;
      filter: contrast(150%) brightness(90%);
    }
    ${(props) =>
      props.active === true &&
      css`
        border: solid var(--buttonBorderThickness) var(--highlightColor);
        filter: contrast(100%) saturate(120%)
          drop-shadow(2px 2px 2px var(--shadowColor));
        :hover {
          filter: brightness(90%) contrast(120%) saturate(150%)
            drop-shadow(2px 2px 2px var(--shadowColor));
        }
      `}
    ${(props) =>
      props.disable === true &&
      css`
        min-width: fit-content;
        height: ${(props) => (props.height ? props.height : "40px")};
        filter: brightness(20%) blur(0.5px);
        width: inherit;
        height: inherit;
        pointer-events: none;
      `}
  `,
};

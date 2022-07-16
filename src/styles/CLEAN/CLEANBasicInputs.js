import styled from "styled-components";

export const CLEANBasicInputs = {
 TextNumber: styled.input`
    width: ${(props) => (props.width ? props.width : " 100% ")};
    height: ${(props) => (props.height ? props.height : " 40px")};
    margin: 5px 5px 5px 5px;

    background: var(--containerLightColor);
    border-radius: var(--buttonBorderRadius) ;
    color: var(--darkTextColor);
    border: none;

    padding-left: 10px;
  `,
TextArea: styled.textarea`
    width: ${(props) => (props.width ? props.width : " 100% ")};
    height: ${(props) => (props.height ? props.height : "fit-content")};
    padding: var(--buttonBorderRadius) var(--buttonBorderRadius) var(--buttonBorderRadius) var(--buttonBorderRadius) ;
    background: var(--containerLightColor);
    border-radius: var(--buttonBorderRadius) ;
    color: var(--darkTextColor);
    border: none;
    margin: 5px 5px 5px 5px;

  `,
}
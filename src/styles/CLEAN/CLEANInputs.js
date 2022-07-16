import styled from 'styled-components'
import InputSingleSelect from './InputSingleSelect';
import SelectInput from './SelectInput';
import InputToggle from './InputToggle';
import InputToList from './InputToList';

export const CLEANInputs = {

  NumberText: styled.input`
    width: ${(props) => (props.width ? props.width : " 100% ")};
    height: ${(props) => (props.height ? props.height : " 40px")};
    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
    input[type="number"] {
      -moz-appearance: textfield;
    }
    margin: 5px 5px 5px 5px;
    padding: 0px 10px 0px 10px;
    background: var(--containerLightColor);
    border: none;
    box-sizing: border-box;
    border-radius: var(--buttonBorderRadius) ;
    color: var(--containerTextColor);
    ::placeholder {
      padding-left: 7px;
      color: ${(props) => (props.color ? props.color : " default ")};
    }
    background-image: none;
  `,
SelectCustom: styled(SelectInput)``,
  InptChckBx: styled.div`
    width: ${(props) => (props.width ? props.width : " 100px")};

    height: ${(props) => (props.height ? props.height : " 40px")};
    user-select: none;
    display: flex;

    text-indent: 20px;
    label {
      width: ${(props) => (props.width ? props.width : " 150px")};


    }

    input {
      visibility: hidden;
      &:checked + label {
        transition: 0.2s;
      }
      &:checked + label {
        display: block;
      }
    }
  `,
  Toggle: styled(InputToggle)``,
  TextToList: styled(InputToList)``,
  //SingleSelect: InputSingleSelect

};

import React, {useState, useEffect} from "react";
import styled from "styled-components";

const InputToggle = ({onChange, name}) => {
    let [isinputToggle, setInputToggle] = useState(false);

    useEffect(() => {
        if (!onChange) return
        if (isinputToggle === "active") {
            onChange(true)
        } else {
            onChange(false)
        }
//eslint-disable-next-line
    }, [isinputToggle])


    const SetInputToggle = () => {
        return setInputToggle(!isinputToggle);
    };
    return (
        <InputToggleContainer>
            <div
                className={isinputToggle ? "active" : ""}
                onClick={() => SetInputToggle()}
            >
                <span></span>
            </div>
        </InputToggleContainer>
    );
};

export default InputToggle;

const InputToggleContainer = styled.div`
  height: min-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  .active {
    span {
      left: 58%;
    }
  }
  input{
  z-index:-1;
  // visibility:hidden;
  }
  div { 
  width: 40px;
  height: 20px;
    background: var(--ModestColor);
    position: relative;
    border-radius: 2.5rem;
    border: 0.5px solid var(--highlightColor);
    cursor: pointer;

    span {
      transition: 0.5s;
      position: absolute;
      top: 50%;
      left: 3%;
      width: 40%;
      height: 80%;
      background: var(--highlightColor);
      border-radius: 50%;
      transform: translateY(-50%);
    }
  }
`;

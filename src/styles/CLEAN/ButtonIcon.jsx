import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import {icons} from "../themeHandler";
function ButtonIcon({
  active = false,
  Icon = "",
  text = "",
  isAvailable = true,
  Expandable = false,
  onClick,
}) {
  const handleClick = (e) => {
    if (typeof onClick == "function") {
      onClick();
    } else {
      console.log("ButtonIcon: Callback not connected");
    }
  };
  useEffect(() => {}, [active]);

  return (
    <ButtonIconContainer
      active={active}
      onClick={() => handleClick()}
      isAvailable={isAvailable}
    >
      <div className="ButtonIconContainerTop">
        <div className="LeftButtonIconContainer">
        <Icon/>
        </div>

        <div className="ButtonIconContainerPlaceholder">
          {Expandable ? (
            <icons.Triangle
              width="25px"
              height="25px"
              fill={active ? "var(--containerSolidColor)" : "white"}
            />
          ) : null}
        </div>
      </div>
      <div className="ButtonIconContainerBottom">{text}</div>
    </ButtonIconContainer>
  );
}

export default ButtonIcon;

const ButtonIconContainer = styled.button`
  width: ${(props) => (props.width ? props.width : "120px")};
  height: ${(props) => (props.height ? props.height : "80px")};
  display: flex;
  justify-content: space-around;
  border-radius: 10px;
  border: 2px solid var(--containerTextColor);
  background-color: ${(props) =>
    props.active ? "var(--highlightColor)" : "var(--containerLightColor)"};
  flex-direction: column;
  color: ${(props) =>
    props.active ? "var(--backgroundTextColor)" : "var(--containerTextColor)"};

  transition-duration: 0.1s;
  ${(props) =>
    !props.isAvailable &&
    css`
      &:before {
        content: "";
        position: absolute;
        z-index: 10;
        margin: 0px 0px 0px -10px;
        border-radius: 10px;
        width: ${(props) => (props.width ? props.width : "120px")};
        height: ${(props) => (props.height ? props.height : "80px")};
        background-color: rgba(0, 0, 0, 0.8);

        border: 2px solid var(--containerSolidColor);
      }

      pointer-events: none;
    `}

  :hover {
    cursor: pointer;
    background-color: ${(props) =>
      props.active ? "var(--highlightHoverColor)" : "var(--containerSolidColor)"};
  }

  .OverlayContainerBIcn {
    width: ${(props) => (props.width ? props.width : "120px")};
    height: ${(props) => (props.height ? props.height : "80px")};
  }

  .ButtonIconContainerTop {
    width: 90%;
    display: flex;
    flex-direction: row;
    .LeftButtonIconContainer {
      height: 40px;
      width: 80px;
      padding-left: 25px;
      svg {
        height: 40px;
        width: 40px;
      }
    }

    .ButtonIconContainerPlaceholder {
      width: 15%;
      height: 90%;

      svg {
        transform: ${(props) =>
          props.active ? "rotate(0deg)" : "rotate(180deg)"};
        transition-duration: 0.5s;

        rect {
          stroke: ${(props) =>
            props.active ? "var(--highlightColor)" : "var(--containerTextColor)"};
        }
      }
    }
  }
  .ButtonIconContainerBottom {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-size: 18px;
  }
`;

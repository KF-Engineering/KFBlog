import styled from "styled-components";
export const CLEANLayouts = {
  ContainerSpace: styled.div`
    width: 100%;
    height: ${(props) => (props.height ? props.height : "10px")};
    color: ${(props) => (props.color ? props.color : "default")};
  `,
  ContainerInvisible: styled.div`
    height: ${(props) => (props.height ? props.height : " 100% ")};
    width: ${(props) => (props.width ? props.width : " 100% ")};

    padding: ${(props) => (props.padding ? props.padding : " auto")};
    background-color: var(--containerInvvisibleColor);
    border-radius: 20px;

    text-decoration: none;
    border: none;

    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);

    //Positioning
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: space-around;
    flex-direction: column;
  `,
  ContainerLight: styled.div`
    //Looks
    height: ${(props) => (props.height ? props.height : " 100%")};
    width: ${(props) => (props.width ? props.width : " 100% ")};
    padding: ${(props) => (props.padding ? props.padding : "auto")};
    min-width: fit-content;
    background-color: var(--containerLightColor);
    text-decoration: none;
    color: var(--containerTextColor);
    border: none;
    display: flex;
    flex-direction: ${(props) =>
      props.flexDirection ? props.flexDirection : " column"};
    justify-content: space-around;
    border-radius: var(--containerBorderRadius);
    border: var(--containerBorderThickness) solid var(--containerBorderColor);
    margin: 5px 5px 5px 5px;
 -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
  `,

  Centration: styled.div`
    width: 59vw;

    @media only screen and (max-width: 1500px) {
      width: 80vw;
    }

    @media only screen and (max-width: 1000px) {
      width: 100vw;
    }

    min-height: 100vh;
    height: fit-content;
  `,
  leftContainer: styled.div`
    width: 19vw;
    @media only screen and (max-width: 1000px) {
      width: 0vw;
      visibility: none;
      display: none;
    }
      max-width: 200px;
  `,
  rightContainer: styled.div`
    width: 19vw;
    @media only screen and (max-width: 1500px) {
      width: 0vw;
      visibility: none;
      display: none;
    }
    @media only screen and (max-width: 1000px) {
      width: 0vw;
      visibility: none;
      display: none;
    }
      max-width: 200px;
  `,
  MainContentContainer: styled.div`
    height: ${(props) =>
      props.navbarheight ? "calc(100vh-navbarheight)" : "calc(100vh-80px)"};
    display: flex;
    justify-content: space-between;
    width: 100%;
  `,

  ContainerSolid: styled.div`
    //Looks
    p {
      padding: 2%;
      color: var(--backgroundTextColor);
    }

    h3 {
      color: var(--containerTextColor);
      font-size: 40px;
    }

    height: ${(props) => (props.height ? props.height : " 100%")};
    width: ${(props) => (props.width ? props.width : " 100% ")};

    padding: ${(props) => (props.padding ? props.padding : " auto")};

    background-color: var(--containerSolidColor);

    text-decoration: none;
    color: var(--containerTextColor);
    margin: auto;
    padding: 1%;
    border-radius: var(--containerBorderRadius);
    border: var(--containerBorderThickness) solid var(--containerBorderColor);
  `,
};

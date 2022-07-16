import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 121;
  height: 100vh;
  background: var(--ContainerLightCol);
  top: 0;
  transition: 0.5s ease-in-out;
  right: ${({ isSideOpen }) => (isSideOpen ? "0" : "-300px")};
  width: 280px;
  @media (min-width: 2100px) {
    right: ${({ isSideOpen }) => (isSideOpen ? "0" : "-530px")};
    width: 500px;
    max-width: 20vw;
    gap: 3vh;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
  width: 15px;
  height: 15px;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 100%;
  transform: translateX(50%);
  background: #000000;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  z-index: 1;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px); //Distance between menu-rows
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const SidebarLink = styled(LinkScroll)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 5rem;
  text-decoration: none;
  list-style: none;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  height: 120px;
  background-color: #ababab;
  width: 100%;
  color: black;
  position: relative;
  @media screen and (min-width: 2100px) {
    flex: 1 1 auto;
  }
  &::after {
    opacity: 0;
    background-color: black;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    font-size: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    transition: 0.5s;
  }
  &:nth-of-type(1):after {
    content: "Home";
  }
  &:nth-of-type(2):after {
    content: "About Us";
  }
  &:nth-of-type(3):after {
    content: "Services";
  }
  &:nth-of-type(4):after {
    content: "Projects";
  }
  &:nth-of-type(5):after {
    content: "Contact";
  }
  &:nth-of-type(6):after {
    content: "Login";
  }
  &:hover {
    &::after {
      opacity: 0.9;
    }
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarRoute = styled(LinkRouter)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 5rem;
  text-decoration: none;
  list-style: none;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  height: 120px;
  background-color: #ababab;
  width: 100%;
  color: black;
  position: relative;
  @media screen and (min-width: 2100px) {
    flex: 1 1 auto;
  }
  &::after {
    content: "Login";
    opacity: 0;
    background-color: black;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    font-size: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    transition: 0.5s;
  }
  &:hover {
    &::after {
      opacity: 0.9;
    }
  }
`;

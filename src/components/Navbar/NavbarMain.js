import React, { useState, useEffect } from "react";

import { FaBars } from "react-icons/fa";
import { animateScroll } from "react-scroll";
import styled from "styled-components";

import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import { ReactComponent as KF } from "./KF_Logo.svg";

function Navbar({ toggle, isNavOpen, navList }) {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) setScrollNav(true);
    if (window.scrollY < 80) setScrollNav(false);
    debugger
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
    return () => window.removeEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    animateScroll.scrollToTop();
  };

  return (
    <Nav isOpen={isNavOpen} scrollNav={scrollNav}>
      <NavbarContainer>
        <NavLogo to="/" onClick={toggleHome}>
          <Logo />
        </NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
          {/*  <span />
          <span />
          <span /> */}
        </MobileIcon>
        <NavMenu>
          {navList.map((elem) => (
            <NavItem>
              <NavLinks
                to={elem.link}
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                activeClass="active"
              >
                {elem.Headline}
              </NavLinks>
            </NavItem>
          ))}
        </NavMenu>
        <NavBtn>

        </NavBtn>
      </NavbarContainer>
    </Nav>
  );
}

export default Navbar;

const Logo = styled(KF)`
  width: 40vw;
  max-width: 300px;
  margin-top: 10px;
  height: auto;
`;

const Nav = styled.div`
  background: ${({ scrollNav }) => (scrollNav ? "#000" : "transparent")};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  position: sticky;
  top: 0;
  z-index: 102;
  width: 100%;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
  @media screen and (min-width: 2100px) {
    transition: 0.5s;
    top: ${({ isOpen }) => (isOpen ? 0 : -80 + "px")};
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px 0 24px;
  max-width: 1100px;
`;

const NavLogo = styled(LinkRouter)`
  color: red;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
`;

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    align-self: center;
    width: 40px;
    height: 40px;
    cursor: pointer;
    color: #fff;
    span {
      background-color: white;
      width: 20px;
      height: 2px;
    }
  }
`;
const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkScroll)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid var(--highlightCol);
  }

  &:hover {
    color: var(--accentCol);
    transition: 0.3s ease-in-out;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkRouter)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

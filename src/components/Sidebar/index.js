import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarLink,
  SidebarRoute,
} from "./SidebarElements";

function Sidebar({ isSideOpen, toggle, sectionList }) {
  return (
    <SidebarContainer isSideOpen={isSideOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarLink to="home" onClick={toggle}>
        280X120
      </SidebarLink>
      <SidebarLink to="aboutus" onClick={toggle}>
        280X120
      </SidebarLink>
      <SidebarLink to="services" onClick={toggle}>
        280X120
      </SidebarLink>
      <SidebarLink to="projects" onClick={toggle}>
        280X120
      </SidebarLink>
      <SidebarLink to="contact" onClick={toggle}>
        280X120
      </SidebarLink>

      <SidebarRoute to="/login" onClick={toggle}>
        280X120
      </SidebarRoute>
    </SidebarContainer>
  );
}

export default Sidebar;

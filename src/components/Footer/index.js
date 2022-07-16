import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrapper,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink,
  WebsiteRights,
} from "./FooterElements";
import { animateScroll } from "react-scroll";

function Footer() {
  const toggleHome = () => {
    animateScroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/login">How it works</FooterLink>
              <FooterLink to="/login">Testimonials</FooterLink>
              <FooterLink to="/login">Careers</FooterLink>
              <FooterLink to="/login">Investors</FooterLink>
              <FooterLink to="/login">Terms of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/login">How it works</FooterLink>
              <FooterLink to="/login">Testimonials</FooterLink>
              <FooterLink to="/login">Careers</FooterLink>
              <FooterLink to="/login">Investors</FooterLink>
              <FooterLink to="/login">Terms of Service</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/login">How it works</FooterLink>
              <FooterLink to="/login">Testimonials</FooterLink>
              <FooterLink to="/login">Careers</FooterLink>
              <FooterLink to="/login">Investors</FooterLink>
              <FooterLink to="/login">Terms of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/login">How it works</FooterLink>
              <FooterLink to="/login">Testimonials</FooterLink>
              <FooterLink to="/login">Careers</FooterLink>
              <FooterLink to="/login">Investors</FooterLink>
              <FooterLink to="/login">Terms of Service</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              dollar
            </SocialLogo>
            <WebsiteRights>
              dollar © {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;

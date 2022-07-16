import React from 'react';
import styled from "styled-components";
import {FaInstagram, FaYoutube, FaWhatsapp, FaPinterest} from "react-icons/fa";


const Social = () => {
    return <SocialCont>
        <span>SOCIALS</span>
        <div/>
        <section>
            <a href='https://www.instagram.com/kaiserfranz_engineering/'><FaYoutube/></a>
            <a href='https://www.instagram.com/kaiserfranz_engineering/'><FaInstagram/></a>
            <a href='https://www.instagram.com/kaiserfranz_engineering/'><FaWhatsapp/></a>
            <a href='https://www.instagram.com/kaiserfranz_engineering/'><FaPinterest/></a>
        </section>
    </SocialCont>
};

export default Social;

const SocialCont = styled.div`
  position: fixed;
  bottom: -1%;
  right: 1.2%;
  color: var(--ContrastCol);
  border-radius: var(--buttonBorderRadius);
  width: 50px;
  flex-direction: column;
  display: flex;
  background-color: var(--backgroundColor);
  align-items: center;
  z-index:101;
  padding-bottom: calc(1rem + 0.1vw);
  @media (max-width: 600px) {

    bottom: 0;
    left: 0;
  }
  span{
    color: var(--seperatorColor);
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    letter-spacing: 0.5rem;
    ;
    font-weight: 700;
  }
  div{
    width: 100%;
    height: calc(5rem + 1vw);
    position: relative;
  }
  div::after{
    content: '';
    position: absolute;
    width: 0.3rem;
    height: 70%;
    background-color: var(--seperatorColor);
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
  section{
    width: 70%;
    a{  
        display: block;
        width: 100%;
        min-width: 31.5px;
        min-height: 31.5px;

        img,svg{
          width: 100%;
          height: 100%;
          background-color: transparent;
          margin: 0.3rem 0;
        }
    }
  }
    `
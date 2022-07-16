import React, {useState, useEffect} from "react";
import {buttons} from "../../styles/themeHandler";
import largecrossgroup from "../../assets/largecrossgroup.svg";

import styled from "styled-components";

function HeroSection() {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };

    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <HeroContainer offsetY={offsetY} id="home">
            <HeroBg>
                {/*<VideoBg autoPlay loop muted src={Video} type="video/mp4" />*/}
            </HeroBg>

            <BackgroundContainer className="parralax" style={{transform: `translateY(${offsetY * 0.4}px)`}}/>
            <HeroContent>
                <HeroH1>Getting A New Website Made Easy</HeroH1>
                <HeroP>For Your New Website Contact Us Now</HeroP>
                <HeroBtnWrapper>
                    <buttons.Normal
                        to="login"
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary="true"
                        dark="true"
                    >
                        Get started
                    </buttons.Normal>
                </HeroBtnWrapper>


            </HeroContent>
        </HeroContainer>
    );
}

export default HeroSection;


const BackgroundContainer = styled.div`

  height: 100vh;
  width: 140vw;
  background-image: url(${largecrossgroup});
  background-repeat: no-repeat;
  background-position: 100% 100%;
  z-index: 0 ;

`

const HeroContainer = styled.div`
   scroll-snap-align: end;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: calc(100vh - 80px);
  position: relative;
  z-index: 1;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }
`;

const HeroBg = styled.div`
  position: relative;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeroH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

const HeroP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;



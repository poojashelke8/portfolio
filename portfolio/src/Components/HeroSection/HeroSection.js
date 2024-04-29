import React from 'react'
// import styled from 'styled-components'
import HeroBgAnimation from '../HeroBgAnimation/HeroBgAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle, SocialMediaIcons, SocialMediaIcon, ResumeButton } from "../HeroSection/HeroStyled"
import { Bio } from '../../data/constants'
import TypeWriter from "typewriter-effect"
//import HeroImg from '../../Images/HeroImage.jpg'

const HeroSection = () => {
  return (
    <div id="about">
      <HeroContainer>
      <HeroBg>
        <HeroBgAnimation />
      </HeroBg>
      <HeroInnerContainer>
          <HeroLeftContainer>
            <Title>Hi, I am <br/>{Bio.name}</Title>
            <TextLoop>
              I am a 
              <span>
                <TypeWriter 
                options={{
                  strings: Bio.roles,
                  autoStart:true,
                  loop:true,
                  }}
                ></TypeWriter>
              </span>
            </TextLoop>
            <SubTitle>{Bio.description}</SubTitle>
            <ResumeButton href={Bio.resume} target="display">Check Resume</ResumeButton>
          </HeroLeftContainer> 
          <HeroRightContainer>
          {/* <Img src={HeroImg} alt="hero-image" /> */}
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>

    </div>
  )
}

export default HeroSection
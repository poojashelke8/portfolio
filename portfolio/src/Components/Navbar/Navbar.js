import React, { useState } from 'react';
import { DiCssdeck } from "react-icons/di";
import { FaBars } from "react-icons/fa";
import { Nav, NavLink,NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu } from "../Navbar/NavbarStyled"
import { useTheme } from 'styled-components';
import { Bio } from '../../data/constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();
  
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <a
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              marginBottom: "20;",
              cursor: "pointer",
            }}>
            <DiCssdeck size="3rem" /><Span>Portfolio</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => {
            setIsOpen(!isOpen);
          }} />
        </MobileIcon>
        <NavItems>
          <NavLink href='#about'>About</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#experience'>Experience</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#education'>Education</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">Github Profile</GitHubButton>
        </ButtonContainer>
        {
          isOpen && (
            <MobileMenu isOpen={isOpen}>
              {/* <MobileMenuLink href="#about" onClick={closeMenu}>About</MobileMenuLink> */}
              {/* <MobileMenuLink href='#skills' onClick={() => {
              setIsOpen(!isOpen)
            }}>Skills</MobileMenuLink>
            <MobileMenuLink href='#experience' onClick={() => {
              setIsOpen(!isOpen)
            }}>Experience</MobileMenuLink>
            <MobileMenuLink href='#projects' onClick={() => {
              setIsOpen(!isOpen)
            }}>Projects</MobileMenuLink>
            <MobileMenuLink href='#education' onClick={() => {
              setIsOpen(!isOpen)
            }}>Education</MobileMenuLink> */}
              <GitHubButton style={{ padding: '10px 16px', background: `${theme.primary}`, color: 'white', width: 'max-content' }} href={Bio.github} target="_blank">Github</GitHubButton>

            </MobileMenu>
          )
        }
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar;
import React from 'react';
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileNavLogo, MobileLink } from "../Navbar/NavbarStyled"
// import {NavLink} from "react-router-dom";
// import styled from "styled-components"
// import { Link as LinkR } from 'react-router-dom';
// import { DiCssdeck } from 'react-icons/di';
// import { FaBars } from 'react-icons/fa';
// import { Bio } from '../../data/constants';
// import { Close, CloseRounded } from '@mui/icons-material';
// import { useTheme } from 'styled-components';


const Navbar = () => {
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo>Logo</NavLogo>
        <MobileIcon></MobileIcon>
        <NavItems>
          <NavLink href='#about'>About</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#experience'>Experience</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#education'>Education</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton>Github Profile</GitHubButton>
        </ButtonContainer>
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar;
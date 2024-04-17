// import logo from './logo.svg';
import './App.css';
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from './utils/Themes';
import HeroSection from './Components/HeroSection/HeroSection';
import Skills from './Components/Skills/Skills';
import Navbar from './Components/Navbar/navbar';

const Body  = styled.div`
background-color: ${({theme}) => theme.bg};
width:100%;
height:100px;
overflow-x:hidden;
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Navbar/>
      <Body>
        portfolio
        <HeroSection/>
        <Skills/>
      </Body>
    </ThemeProvider>
  );
}

export default App;

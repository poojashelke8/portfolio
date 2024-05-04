// import logo from './logo.svg';
import './App.css';
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from './utils/Themes';
import HeroSection from './Components/HeroSection/HeroSection';
import Skills from './Components/Skills/Skills';
import Navbar from './Components/Navbar/Navbar';
import Education from './Components/Education/Education';
import { BrowserRouter as Router } from 'react-router-dom';
import Experience from './Components/Experience/Experience';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

const Body  = styled.div`
background-color: ${({theme}) => theme.bg};
width:100%;
// height:100px;
overflow-x:hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>

      <Navbar/>
      <Body>
        <HeroSection/>
        <Wrapper>
        <Skills/>
        <Experience/>
        {/* <Education/> */}
        </Wrapper>
        <Projects/>
        <Wrapper>
          <Education/>
          {/* <Contact/> */}
        </Wrapper>
        <Footer/>
      </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
// import logo from './logo.svg';
import './App.css';
import styled from "styled-components";

const Body  = styled.div`
background-color: ${({theme}) => theme.bg};
width:100%;
overflow-x:hidden;
`;

function App() {
  return (
    <div className="App">
      <h1>Hello There</h1>
    </div>
  );
}

export default App;

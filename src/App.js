import React from 'react';
import './App.css';
import PortfolioContainer from './components/Nav/PortfolioContainer';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Footer from "./components/Footer/index"


function App() {
  return (
    <div>
      <Navbar className= "nav justify-content-center" bg="transparent" expand="lg">
        <h1>Leo Ayala</h1> 
      </Navbar>
      <Nav>
        <PortfolioContainer/>
      </Nav>
      <main >
      </main>
      <Footer/>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import PortfolioContainer from './components/Nav/PortfolioContainer';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'


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
      <Container>
  <Row>
  <Col className= "navbar fixed-bottom d-flex justify-content-center">
      <div >
                <span>
                        <a  href="https://www.linkedin.com/in/leo-ayala-36b333l58/" target="_blank" rel="noopener noreferrer">
                            linkedin</a>
                        <a  href="https://github.com/leo-ayala" target="_blank" rel="noopener noreferrer">
                            gitbub</a>
                        <a  href="mailto:leo.ayala.dev@gmail.com" target="_blank" rel="noopener noreferrer">
                            email</a>   
                </span>
                </div>
      </Col>
  </Row>
</Container>

    </div>
  );
}

export default App;

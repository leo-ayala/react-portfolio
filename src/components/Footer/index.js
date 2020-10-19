import React from 'react'
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import 'font-awesome/css/font-awesome.min.css';

function footer() {
    return (
        <footer className="mt-5">
            <Container >
                <Row>
                    <Col className="navbar fixed-bottom d-flex justify-content-center p=0 md=3" >
                    
                        <a className="p=10" href="https://www.linkedin.com/in/leo-ayala-36b333l58/" target="_blank">
                            <i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
                        <a className="p=10" href="https://github.com/leo-ayala" target="_blank">
                            <i className="fa fa-github" aria-hidden="true"></i></a>
                        <a className="p=10" href="mailto:leo.ayala.dev@gmail.com" target="_blank">
                            <i className="fa fa-envelope" aria-hidden="true"></i></a>
                    
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default footer;

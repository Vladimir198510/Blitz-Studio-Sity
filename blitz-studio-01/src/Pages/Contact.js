import React, { Component } from 'react';
import CarouselBox from '../Components/CarouselBox';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import Aman from '../Pictures/A_Man.jpg';

export default class Contact extends Component {
    render() {
        return (
            <>
                <CarouselBox></CarouselBox>
                <Container style={{ display: 'flex', justifyContent: 'center', fontSize: '20px', textTransform: 'uppercase', marginTop:'20px' }}>
                    <Nav>
                        <Nav.Link style={{color:'#cecece'}} href="/">Home</Nav.Link>
                        <Nav.Link style={{color:'#cecece'}} href="/about">About Me</Nav.Link>
                        <Nav.Link style={{color:'#cecece'}} href="/portfolio">Portfolio</Nav.Link>
                        <Nav.Link style={{color:'#cecece'}} href="/contact">Contact</Nav.Link>
                    </Nav>
                </Container>
                <hr style={{ width: '1100px' }} />
                <Container style={{ marginTop: '150px' }}>
                    <Row>
                        <Col md={5}>
                            <img src={Aman} height={390} />
                        </Col>

                        <Col md={5}>
                            <h2>About Me</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                            <p>Duis aute irure dolor in reprehenderit in voluptate velit
                               esse cillum dolore eu fugiat nulla pariatur.</p>
                            <h5>Jason Wood</h5>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

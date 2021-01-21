import React, { Component } from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import priroda from '../Pictures/priroda.jpg';


import Home from '../Pages/Home';
import About from '../Pages/About';
import Portfolio from '../Pages/Portfolio';
import Contact from '../Pages/Contact';

export default class Header extends Component {
    render() {
        return (
            <div>
                <>
                    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                        <Container>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="mr-auto">
                                    <Nav.Link href="/">Home</Nav.Link>
                                    <Nav.Link href="/about">About Me</Nav.Link>
                                    <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                                    <Nav.Link href="/contact">Contact</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                    <Router>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/about" component={About} />
                            <Route exact path="/portfolio" component={Portfolio} />
                            <Route exact path="/contact" component={Contact} />
                        </Switch>
                    </Router>
                </>
            </div>
        )
    }
}

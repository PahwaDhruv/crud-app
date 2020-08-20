import  React, {Component} from 'react';
import logo from '../../logo.svg';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import {Link} from 'react-router-dom';

class Header extends Component{
    constructor(props){
        super(props);
        this.state={};
    }

    render(){
        return(
            <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
                <Navbar.Brand as={Link} to="/">
                    <img src={logo} alt="React logo" width="50" height="50" className="d-inline-block" />
                    {"CRUD APP"}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/" href="/">
                    Home
                    </Nav.Link>
                    <Nav.Link as={Link} to="/add" href="/add">
                    Add
                    </Nav.Link>
                    <Nav.Link as={Link} to="/about" href="/about">
                        About
                    </Nav.Link>
                    <Nav.Link as={Link} to="/contact" href="/contact">
                        Contact
                    </Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
        
    }
}

export default Header;

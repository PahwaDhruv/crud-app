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
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>
                    <img src={logo} alt="React logo" width="50" height="50" className="d-inline-block" />
                    {"CRUD APP"}
                </Navbar.Brand>
                <Nav>
                    <Nav.Link as={Link} to="/">
                    Home
                    </Nav.Link>
                    <Nav.Link as={Link} to="/add">
                    Add
                    </Nav.Link>
                    <Nav.Link as={Link} to="/about">
                        About
                    </Nav.Link>
                    <Nav.Link as={Link} to="/contact">
                        Contact
                    </Nav.Link>
                </Nav>
            </Navbar>
        );
        
    }
}

export default Header;
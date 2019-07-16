import React, { Component } from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import logo from '../img/logo.png';
import AddArticle from './AddArticle';

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {  
            text:'',
        }
    }
   
    render() {
        var {onChange} = this.props
        return ( 
            <Navbar bg="white" expand="lg" fixed="top" className="menu container">
                <img src={logo} alt="alt is here" width="50px" className="logo"/>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">See All</Nav.Link>
                        <AddArticle/>
                    </Nav>
                    <div className="search">
                        <input className="search-field" onChange={(event) => {onChange(event.target.value)}} 
                                type="text" placeholder="Search for article"/>
                    </div>
                    
                </Navbar.Collapse>
            </Navbar>
         );
    }
}
 
export default Header;
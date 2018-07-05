import React, {Component} from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import './Navigation.css';

export class Navigation extends Component {
    render() {
        return (
            <div>
                <Navbar fluid fixedTop collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="/">VS</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <NavItem eventKey={1} href="#about">
                                About
                            </NavItem>
                            <NavItem eventKey={2} href="#technologies">
                                Technologies
                            </NavItem>
                            <NavItem eventKey={1} href="#projects">
                                Projects
                            </NavItem>
                            <NavItem eventKey={2} href="#blog">
                                Story
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}
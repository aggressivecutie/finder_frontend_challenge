import React, { Component } from 'react';
import {
    Nav,
    NavItem,
    NavLink
  } from 'reactstrap';


  export default function Navbar() {
      return(
        <div className="NavBar">
          <Nav pills>
            <NavItem>
              <NavLink href="#" active>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" className="text-muted">Members</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" className="text-muted">Photos</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" className="text-muted">Pages</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" className="text-muted">Discussions</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" className="text-muted">More</NavLink>
            </NavItem>
          </Nav>
        </div>
      );
  };

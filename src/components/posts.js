import React, { Component } from 'react';
import {
    Button,
    ButtonGroup,
    Nav,
    Col
  } from 'reactstrap';

  export default function Navbar() {
      var data = require('../json/data')
      console.log(data)
      let posts = data.map((item =>
          <div className="Feed" key={item.length}>
            <a href={`${item.url}`}><h6 className="underline">{item.title}</h6></a>
            <p>{item.description}</p>
            <hr></hr>
          </div>
        ));



      return(
        <Col xs="12" md="7">
          <div className="SideContainer">
            <h4 className="text-primary">Top five posts</h4>
            {posts}
          </div>
        </Col>

      );
    };

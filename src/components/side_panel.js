import React, { Component } from 'react';
import {
    Button,
    ButtonGroup,
    Nav,
    Col
  } from 'reactstrap';

  export default function Navbar() {
      return(
        <Col xs="12" md="5">
          <div className="SideContainer">
            <h6 className="text-primary">Image of the week</h6>
            <iframe src="https://giphy.com/embed/13XW2MJE0XCoM0" width="325" height="225" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><a href="https://giphy.com/gifs/13XW2MJE0XCoM0"></a>
            <Button size="sm" color="primary">See More</Button>

            <hr></hr>

            <h6 className="text-primary">Quote of the week</h6>
            <p className="verticalLine">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes.</p>
            <p className="italic">-Johnny Five.</p>


            <Button size="sm" color="primary">More quotes</Button>

          </div>
        </Col>

      );
    };

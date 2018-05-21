import React, { Component } from 'react';
import {
    Button,
    Row,
    Col
  } from 'reactstrap';
import './App.css';

// Import in components
import Navbar from './components/navbar';
import Posts from './components/posts';
import Sidefeed from './components/side_panel';




class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header__underline">
          <header className="App-header">
            <h1 className="App-title">My Awesome Website</h1>
          </header>
        </div>
        <Navbar />

        <Row>
          <Posts />
          <Sidefeed />
        </Row>
      </div>
    );
  }
}

export default App;

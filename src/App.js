
import React, { Component } from 'react'
import './App.css'
import Nav from './components/Nav'
import Body from './components/Body'
// import Flex from './components/Flex'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Nav className="hk-nav">
        </Nav>
        <Body className="hk-body">
        </Body>
      </div>
    )
  }
}

export default App

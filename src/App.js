
import React, { Component } from 'react'
import './App.css'
import HKPopover from './components/HKPopover'

class App extends Component {
  render() {
    return (
      <div className="app">
        <HKPopover className="hk-nav" />
      </div>
    )
  }
}

export default App

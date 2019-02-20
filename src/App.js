import React, { Component } from 'react';
import './App.css';

import Closed from './Closed/Closed';
import Open from './Open/Open';

class App extends Component {
  state = {
    open: false
  }

  openRest = () => {
    this.setState(
      {
        open: !(this.state.open)
      }
    );
  }

  renderOpenContent = () => {
    if (this.state.open) {
      return (
        <Open />
      );
    } else {
      return (
        <Closed />
      );
    }
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.openRest}>Click</button>
        <h1 className="title">Restaurant</h1>
        
        {this.renderOpenContent()}

      </div>
    );
  }
}

export default App;

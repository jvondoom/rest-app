import React, { Component } from 'react';
import './App.css';

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
        <p>We are open!</p>
      );
    } else {
      return (
        <p>We are closed!</p>
      );
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Restaurant</h1>
        
        {this.renderOpenContent()}

        <button onClick={this.openRest}>Click</button>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import '../styles/app.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-header"></div>
        <p className="app-intro">
          hello world!
        </p>
        <div className="app-footer"></div>
      </div>
    );
  }
}

export default App;

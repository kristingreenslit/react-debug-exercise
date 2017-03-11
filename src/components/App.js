import React, { Component } from 'react';
import Navbar from './navbar';
import LoginForm from './form';
// import Footer from './footer';
import '../styles/app.css';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Navbar />
        <LoginForm />
      </div>
    );
  }
}

export default App;

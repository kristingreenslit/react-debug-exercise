import React, { Component } from 'react';
import Navbar from './navbar';
import LoginForm from './form';
// import Footer from './footer';
import '../styles/app.css';

class App extends Component {

  handleLogin() {
    console.log('login handled');
  }

  render() {
    return (
      <div className='app'>
        <Navbar handleLogin={this.handleLogin} />
        <LoginForm />
      </div>
    );
  }
}

export default App;

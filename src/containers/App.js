import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import LoginForm from '../components/LoginForm';
// import Footer from '../components/Footer';
import '../styles/App.css';

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

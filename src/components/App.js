import React, { Component } from 'react';
import Header from './header';
import LoginForm from './form';
// import Footer from './footer';
import '../styles/app.css';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Header />
        <LoginForm />
      </div>
    );
  }
}

export default App;

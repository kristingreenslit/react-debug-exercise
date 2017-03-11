import React, { Component } from 'react';
import '../styles/App.css';

class Navbar extends Component {
  render() {
    return (
      <div className='app-navbar'>
      	<div className='flex-container'>
	      	<div className='header'>React Debug App</div>
	      	<button className='flat-button border-white' onClick={this.props.handleLogin}>Log In</button>
        </div>
      </div>
    );
  }
}

export default Navbar;
import React, { Component } from 'react';
import '../styles/app.css';

class Navbar extends Component {
  render() {
    return (
      <div className='app-navbar'>
      	<button className='pull-right flat-button button-white'>Log In</button>
      </div>
    );
  }
}

export default Navbar;
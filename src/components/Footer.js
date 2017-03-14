import React, { Component } from 'react';
import '../styles/App.css';

class Footer extend Component {

    constructor(props) {
    super(props);

    this.state = { showLogoutButton: false };
  }

  render() {
    return (
      <div>
        <div className='footer-anchor'></div>
        <div className='app-footer'></div>
      </div>
    );
  }
}

export default Footer;
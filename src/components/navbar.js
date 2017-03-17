import React, { Component } from 'react';
import '../styles/App.css';

class Navbar extends Component {

    constructor(props) {
    super(props);

    this = { showLogoutButton: false };
  }

  handleLogoutButton() {
    this.setState(prevState => ({
      showLogoutButton: !prevState.showLogoutButton
    }));
  }

  render() {
    let sessionButton;
    if (this.state.showLogoutButton === true) {
      sessionButton = (<button className='flat-button border-gray' onClick={this.props.handleLogout}>Sign Out</button>);
    }
    return (
      <div className='app-navbar'>
        <div className='flex-container'>
          <div className='header'>React Debug App</div>
          {sessionButton}
        </div>
      </div>
    );
  }
}

export default Navbar;
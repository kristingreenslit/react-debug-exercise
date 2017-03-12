import React, { Component } from 'react';
import '../styles/App.css';

class Navbar extends Component {

    constructor(props) {
    super(props);

    this.state = {
      showLoginButton: true,
      showLogoutButton: false
    };
  }

  handleLoginButton() {
    this.setState({
      showLoginButton: false,
      showLogoutButton: true
    });
  }

  handleLogoutButton() {
    this.setState({
      showLoginButton: true,
      showLogoutButton: false
    });
  }

  render() {
    let sessionButton;
    if (this.state.showLoginButton === true) {
      sessionButton = (<button className='flat-button border-white' onClick={this.props.startLogin}>Sign In</button>);
    } else {
      sessionButton = (<button className='flat-button border-white' onClick={this.props.handleLogout}>Sign Out</button>);
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
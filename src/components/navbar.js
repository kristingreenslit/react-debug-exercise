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

  handleButtonToggle() {
    this.setState({
      showLoginButton: false,
      showLogoutButton: true
    });
  }

  render() {
    let sessionButton;
    if (this.state.showLoginButton === true) {
      sessionButton = (<button className='flat-button border-white' onClick={this.props.handleLogin}>Sign In</button>);
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
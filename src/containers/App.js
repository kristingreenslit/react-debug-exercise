import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import LoginForm from '../components/LoginForm';
import '../styles/App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showLoginForm: false
    };
    this.startLogin = this.startLogin.bind(this);
    this.handleSession = this.handleSession.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  startLogin() {
    this.setState({ showLoginForm: true });
  }

  handleSession() {
    this.refs.navbuttons.handleLoginButton();
    this.setState({ showLoginForm: false });
  }

  handleLogout() {
    this.refs.navbuttons.handleLogoutButton();
    this.setState({ showLoginForm: false });
  }

  render() {
    return (
      <div className='app'>
        <Navbar ref='navbuttons' startLogin={this.startLogin} handleLogout={this.handleLogout} />
        <div className={this.state.showLoginForm === true ? '' : 'hide'}>
          <LoginForm handleSession={this.handleSession} handleLogout={this.handleLogout} />
        </div>
      </div>
    );
  }
}

export default App;

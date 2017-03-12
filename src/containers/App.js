import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import LoginForm from '../components/LoginForm';
// import Footer from '../components/Footer';
import '../styles/App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showLoginButton: true,
      showLogoutButton: false,
      showLoginForm: false
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleCredentials = this.handleCredentials.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogin() {
    this.setState({
      showLoginButton: false,
      showLogoutButton: true,
      showLoginForm: true
    });
  }

  handleCredentials() {
    this.setState({
      showLoginButton: false,
      showLogoutButton: true,
      showLoginForm: false
    });
  }

  handleLogout() {
    this.setState({
      showLoginButton: true,
      showLogoutButton: false,
      showLoginForm: true
    });
  }

  render() {
    return (
      <div className='app'>
        <Navbar handleLogin={this.handleLogin} handleLogout={this.handleLogout} />
        <div className={this.state.showLoginForm === true ? '' : 'hide'}>
          <LoginForm handleCredentials={this.handleCredentials} />
        </div>
      </div>
    );
  }
}

export default App;

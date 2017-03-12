import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import LoginForm from '../components/LoginForm';
// import Footer from '../components/Footer';
import '../styles/App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = { showLoginForm: false };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleCredentials = this.handleCredentials.bind(this);
  }

  handleLogin() {
    this.setState({ showLoginForm: true });
  }

  handleCredentials() {
    this.setState({ showLoginForm: false });
  }

  render() {
    return (
      <div className='app'>
        <Navbar handleLogin={this.handleLogin} />
        <div className={this.state.showLoginForm === true ? '' : 'hide'}>
          <LoginForm handleCredentials={this.handleCredentials} />
        </div>
      </div>
    );
  }
}

export default App;

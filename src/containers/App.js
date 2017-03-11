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
  }

  handleLogin() {
    this.setState({ showLoginForm: true });
  }

  render() {
    return (
      <div className='app'>
        <Navbar handleLogin={this.handleLogin} />
        <div className={this.state.showLoginForm === true ? '' : 'hide'}>
          <LoginForm />
        </div>
      </div>
    );
  }
}

export default App;

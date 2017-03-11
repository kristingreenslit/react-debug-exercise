import React, { Component } from 'react';
import { Col, Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import '../styles/app.css';

class LoginForm extends Component {
  render() {
    return (
      <Form horizontal>
        <fieldset>
          <Col smOffset={3} sm={6} style={{ marginTop: 50}}>

            <FormGroup>
              <Col smOffset={2} sm={10}>
                <h3 style={{ textAlign: 'left' }}>Sign in</h3>
              </Col>
            </FormGroup>

            <FormGroup controlId='formHorizontalEmail'>
              <Col componentClass={ControlLabel} sm={2}>Email</Col>
              <Col sm={10}>
                <FormControl type='email' name='email' placeholder='Email' autoCapitalize='off' autoCorrect='off' />
              </Col>
            </FormGroup>

            <FormGroup controlId='formHorizontalPassword'>
              <Col componentClass={ControlLabel} sm={2}>Password</Col>
              <Col sm={10}>
                <FormControl type='password' name='password' placeholder='Password' />
              </Col>
            </FormGroup>

            <FormGroup>
              <Col smOffset={2} sm={2} style={{ marginTop: 10 }}>
                <Button type='submit'>Sign in</Button>
              </Col>
            </FormGroup>

          </Col>
        </fieldset>
      </Form>
    );
  }
}

export default LoginForm;

import React, { Component } from 'react'
import SignIn from './SignIn';
import SignUp from './SignUp';

export default class ConditioanlRendering extends Component {
  state = {
    email: '',
    password: '',
    fullName: '',
    signIn: true,
  }

  authHandler = (type) => {
    this.setState(prevState => ({ signIn: !prevState.signIn }));
  }

  render() {
    const { signIn } = this.state;
    return (
      <div>
        <h1>Sign {signIn ? 'in' : 'up'}</h1>
        {
          signIn ?
            <SignIn />
            :
            <SignUp />
        }
        <p></p>
        <button
          onClick={this.authHandler}
          className={`btn ${signIn ? 'active' : 'btn-primary'}`}
        >
          Sign {signIn ? 'up' : 'in'}
        </button>
      </div>
    )
  }
}

import React, { Component } from 'react'

export default class SignIn extends Component {
  render() {
    return (
      <div>
        <form action="">
          <p>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              onChange={this.inputHandler}
            />
          </p>
          <p>
            <input
              type="password"
              name="password"
              placeholder="Your Password"
              onChange={this.inputHandler}
            />
          </p>
          <button>Log In</button>
        </form>
      </div>
    )
  }
}

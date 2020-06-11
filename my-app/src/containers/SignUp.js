import React, { Component } from 'react';

const initialState = {
  bio: '',
  email: '',
  fullName: '',
  password: '',
  type: 'admin',
  loggedIn: false,
};

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  inputHandler = e => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  resetHandler = () => {
    this.setState(initialState);
  }

  fonmHandler = e => {
    e.preventDefault();
    console.log('Form suubmited');
    this.setState({ loggedIn: true });
  }

  render() {
    const { fullName, email, password, type, bio, loggedIn } = this.state;
    console.log(this.state);

    if (loggedIn) {
      return (
        <div>
          <h2>Sign in</h2>
          <button onClick={() => this.setState({ loggedIn: false })}>Sign out</button>
          <form action="" onSubmit={this.fonmHandler}>
            <p>
              <label htmlFor="">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={email}
                onChange={this.inputHandler}
              />
            </p>
            {email.length > 5 && <h4>Email value: {email}</h4>}
            <p>
              <label htmlFor="">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={this.inputHandler}
              />
            </p>
            <h4>{password}</h4>
            <button type="submit">Sign in</button>
          </form>
        </div>
      );
    }
    return (
      <div>
        <h2>Sign Up Now!</h2>
        <form action="" onSubmit={this.fonmHandler}>
          <p>
            <label htmlFor="">Full name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Your name"
              value={fullName}
              onChange={this.inputHandler}
            />
          </p>
          <h4>{fullName}</h4>
          <p>
            <label htmlFor="">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={email}
              onChange={this.inputHandler}
            />
          </p>
          <h4>{email}</h4>
          <p>
            <label htmlFor="">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={this.inputHandler}
            />
          </p>
          <h4>{password}</h4>
          <p>
            <select name="type" onChange={this.inputHandler} value={type}>
              <option value="customer">Customer</option>
              <option value="seller">Seller</option>
              <option value="admin">Admin</option>
            </select>
          </p>
          <textarea name="bio" value={bio} onChange={this.inputHandler} />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
  }
}

export default SignUp;

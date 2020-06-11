import React, { Component } from 'react'

export default class Users extends Component {
  state = {
    users: [
      { name: "Bob", age: 67, id: 1 },
      { name: "Sam", age: 17, id: 2 },
      { name: "Marly", age: 35, id: 3 },
      { name: "Alex", age: 23, id: 4 },
    ],
    compayies: ["CocaCola", "Pepsi", "Adidas"],
    newUser: false,
    userDetails: {
      name: '',
      age: 0,
    }
  }

  removeUserHandler = id => {
    const { users } = this.state;
    const updatedUsersList = users.filter(user => user.id !== id);
    this.setState({ users: updatedUsersList });
  }

  newUserHandler = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => {
      return { userDetails: { ...prevState.userDetails, [name]: value } }
    });
  }

  addNewUser = () => {
    const { userDetails } = this.state;
    this.setState(prevState => {
      return { users: [...prevState.users, { ...userDetails, id: prevState.users.length + 1 }] }
    });
  }

  render() {
    const { users, newUser, userDetails } = this.state;
    console.log(this.state);

    return (
      <div>
        <h3>Userts list</h3>
        <button onClick={() => this.setState({ newUser: true })}>Add user</button>
        {
          users.map((user, i) => {
            return (
              <p key={user.id}>
                {user.name} - age: {user.age}
                <button onClick={() => this.removeUserHandler(user.id)}>X</button>
              </p>
            )
          })
        }
        {
          !users.length && <h1>There is no user in your database</h1>
        }
        {
          newUser &&
          (
            <div>
              <h3>Add new User</h3>
              <p>
                <label htmlFor="">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={userDetails.name}
                  onChange={this.newUserHandler}
                />
              </p>
              <p>
                <label htmlFor="">Age</label>
                <input
                  type="number"
                  name="age"
                  placeholder="Age"
                  value={userDetails.age}
                  onChange={this.newUserHandler}
                />
              </p>
              <button onClick={this.addNewUser}>Add</button>
            </div>
          )
        }
      </div>
    )
  }
}

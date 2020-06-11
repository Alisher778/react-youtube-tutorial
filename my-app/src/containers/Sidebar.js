import React, { Component } from 'react';


class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = { user: { name: '', img: '' }, num: 0 }

    console.log('[Constructor]......')
  }

  componentDidMount() {
    console.log('[ComponentDidMount] is......');
    // fetch user data from database: data ={name: '', img: ''}
    this.setState({ user: { name: 'Alisher', img: 'dsaghhghj' } });
  }

  updateNumber = () => {
    if (this.state.num < 3) {
      this.setState(oldState => {
        return {
          num: oldState.num + 1
        }
      })
    }

  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(this.state.num, nextState.num);

    return true
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevState.num, this.state.num);
    if (prevState.num < this.state.num) {
      console.log('hey')
    }
  }

  componentWillUnmount() {
    console.log('Unmounting');
  }

  render() {
    console.log('[Render] is......');
    const { num } = this.state;
    return (
      <div>
        <h1>Hello React {num}</h1>
        <button onClick={this.updateNumber}>Update</button>
      </div>
    )
  }
}

export default Sidebar;
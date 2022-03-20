import {Component} from 'react'

import Message from '../Message'

import Login from '../Login'

import Logout from '../Logout'

import './index.css'

class Home extends Component {
  state = {isLoggedIn: false}

  changeButton = () => {
    this.setState(prevState => {
      if (prevState.isLoggedIn === true) {
        return {isLoggedIn: false}
      }
      return {isLoggedIn: true}
    })
  }

  render() {
    const {isLoggedIn} = this.state

    const button = isLoggedIn ? (
      <Logout text="Logout" func={this.changeButton} />
    ) : (
      <Login text="Login" func={this.changeButton} />
    )

    const message = isLoggedIn ? 'Welcome User' : 'Please Login'

    return (
      <div className="container">
        <div className="card-container">
          <Message message={message} />
          <div>{button}</div>
        </div>
      </div>
    )
  }
}

export default Home

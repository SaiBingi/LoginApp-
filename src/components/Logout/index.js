import {Component} from 'react'

import './index.css'

class Logout extends Component {
  render() {
    const {text, func} = this.props
    return (
      <button type="button" className="button" onClick={func}>
        {text}
      </button>
    )
  }
}

export default Logout

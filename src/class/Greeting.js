import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Greeting extends Component {
  static propTypes = {
    name: PropTypes.string
  }

  static defaultProps = {
    name: 'Anonymous'
  }

  render () {
    const { name } = this.props

    return (
      <div className='Greeting'>
        <p>Hello, {name}!</p>
      </div>
    )
  }
}

export default Greeting

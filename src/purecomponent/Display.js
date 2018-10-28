import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Display extends Component {
  static propTypes = {
    value: PropTypes.number
  }

  render () {
    const { value } = this.props
    console.log(`rendered Display with value: ${value}`)

    return <p>value: {value}</p>
  }
}

export default Display

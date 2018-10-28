import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class Display extends PureComponent {
  static propTypes = {
    value: PropTypes.number
  }

  render () {
    const { value } = this.props
    console.log(`rendered PureDisplay with value: ${value}`)

    return <p>value: {value}</p>
  }
}

export default Display

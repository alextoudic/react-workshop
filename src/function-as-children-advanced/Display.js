import React, { Component } from 'react'
import PropTypes from 'prop-types'

import burst from './burst'

class Display extends Component {
  static propTypes = {
    value: PropTypes.number
  }

  constructor (props) {
    super(props)

    this.display = React.createRef()
  }

  shouldComponentUpdate ({ value }) {
    const shouldUpdate = this.props.value !== value

    if (shouldUpdate && value === 0) {
      burst(this.display.current)
    }

    return shouldUpdate
  }

  render () {
    const { value } = this.props

    return (
      <p ref={this.display}>{ value }</p>
    )
  }
}

export default Display

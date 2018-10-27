import React from 'react'
import PropTypes from 'prop-types'

const Greeting = ({ name }) => <p>Hello, {name}!</p>

Greeting.propTypes = {
  name: PropTypes.string
}

Greeting.defaultProps = {
  name: 'Anonymous'
}

export default Greeting

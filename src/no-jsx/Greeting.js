import React from 'react'
import PropTypes from 'prop-types'

const Greeting = ({ name }) =>
  React.createElement(
    'div',
    {
      className: 'Greeting'
    },
    React.createElement('p', {}, `Hello, ${name}!`)
  )

Greeting.propTypes = {
  name: PropTypes.string
}

Greeting.defaultProps = {
  name: 'Anonymous'
}

export default Greeting

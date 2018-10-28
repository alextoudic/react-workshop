import React from 'react'
import PropTypes from 'prop-types'

const Display = ({ logName, value }) => {
  console.log(`rendered ${logName} with value: ${value}`)

  return <p>value: {value}</p>
}

Display.propTypes = {
  logName: PropTypes.string,
  value: PropTypes.number
}

export default Display

import React from 'react'
import PropTypes from 'prop-types'

import withResize from './withResize'

import './App.css'

const App = ({ resize: { width, height } }) => (
  <div className='App'>
    <p>width: {width}, height: {height}</p>
  </div>
)

App.propTypes = {
  resize: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number
  })
}

export default withResize(App)

import React from 'react'
import PropTypes from 'prop-types'

import compose from './compose'
import withRandom from './withRandom'
import withResize from './withResize'

import './App.css'

const App = ({ random, resize: { width, height } }) => (
  <div className='App'>
    <p>random: {random}</p>
    <p>width: {width}, height: {height}</p>
  </div>
)

App.propTypes = {
  random: PropTypes.number,
  resize: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number
  })
}

export default compose(withRandom(10, 20), withResize)(App)

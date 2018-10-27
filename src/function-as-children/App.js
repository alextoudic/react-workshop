import React from 'react'

import Resize from './Resize'

import './App.css'

const App = () => (
  <Resize>
    {({ width, height }) => (
      <div className='App'>
        <p>width: {width}, height: {height}</p>
      </div>
    )}
  </Resize>
)

export default App

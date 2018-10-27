import React from 'react'

import Resize from './Resize'

import './App.css'

const App = () => (
  <Resize
    render={({ width, height }) => (
      <div className='App'>
        <p>width: {width}, height: {height}</p>
      </div>
    )}
  />
)

export default App

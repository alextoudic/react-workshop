import React from 'react'

import Greeting from './Greeting'
import './App.css'

const App = () => (
  <div className='App'>
    <Greeting />
    <Greeting name='Rick' />
  </div>
)

export default App

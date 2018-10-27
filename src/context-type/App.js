import React from 'react'

import ResizeProvider from './ResizeProvider'
import AnotherComponent from './AnotherComponent'
import './App.css'

const App = () => (
  <ResizeProvider>
    <div className='App'>
      <AnotherComponent />
    </div>
  </ResizeProvider>
)

export default App

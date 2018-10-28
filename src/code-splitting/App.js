import React, { lazy, Suspense } from 'react'

import './App.css'
const Greeting = lazy(
  () =>
    new Promise(resolve => {
      setTimeout(() => {
        import('./Greeting').then(resolve)
      }, 5000)
    })
)

const App = () => (
  <div className='App'>
    <Suspense fallback={<p>Loading...</p>}>
      <Greeting name='World' />
    </Suspense>
  </div>
)

export default App

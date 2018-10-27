import React from 'react'

import Countdown from './Countdown'

const Done = () => <p>Done!</p>

const App = () => (
  <Countdown done={<Done />} duration={10} />
)

export default App

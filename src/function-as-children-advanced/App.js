import React from 'react'

import Countdown from './Countdown'

import Display from './Display'

const Done = () => <p>Done!</p>

const App = () => (
  <Countdown duration={10} done={<Done />}>
    {({ value, running, onPause, onStart }) => (
      <React.Fragment>
        <Display value={value} />
        <div>
          {running
            ? <button onClick={onPause}>Pause</button>
            : <button onClick={onStart}>Start</button>}
        </div>
      </React.Fragment>
    )}
  </Countdown>
)

export default App

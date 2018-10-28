import React, { Component, memo } from 'react'
import './App.css'

import Display from './Display'
const MemoizedDisplay = memo(Display)

class App extends Component {
  state = {
    value: 0
  }

  onDown = () => this.setState(({ value }) => ({ value: value - 1 }))
  onStay = () => this.setState(({ value }) => ({ value }))
  onUp = () => this.setState(({ value }) => ({ value: value + 1 }))

  render () {
    const { value } = this.state

    return (
      <div className='App'>
        <Display logName='Display' value={value} />
        <MemoizedDisplay logName='MemoizedDisplay' value={value} />
        <span>
          <button onClick={this.onDown}>
            -
          </button>
          <button onClick={this.onStay}>
            =
          </button>
          <button onClick={this.onUp}>
            +
          </button>
        </span>
      </div>
    )
  }
}

export default App

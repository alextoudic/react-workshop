import React, { Component } from 'react'

import Countdown from './Countdown'
import './App.css'

class App extends Component {
  state = {
    done: false
  }

  onDone = () =>
    this.setState({
      done: true
    })

  render () {
    const { done } = this.state

    return (
      <div className='App'>
        {done ? <p>DONE!</p> : <Countdown onDone={this.onDone} duration={20} />}
      </div>
    )
  }
}

export default App

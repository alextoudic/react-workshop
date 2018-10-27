import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Countdown.css'

class Countdown extends Component {
  static propTypes = {
    duration: PropTypes.number
  }

  state = {
    running: false
  }

  constructor (props) {
    super(props)

    this.state.remaining = props.duration
  }

  componentDidMount () {
    this.time = window.performance.now()
    this.update()
  }

  componentWillUnmount () {
    window.cancelAnimationFrame(this.nextFrame)
  }

  update = () => {
    if (this.state.running) {
      const now = window.performance.now()

      this.setState(prevState => {
        const ellapsedTime = (now - this.last) / 1000
        const remaining = prevState.remaining - ellapsedTime

        return remaining > 0
          ? {
            remaining
          }
          : {
            remaining: 0,
            running: false
          }
      })

      this.last = now
    }

    this.nextFrame = window.requestAnimationFrame(this.update)
  }

  onStart = () => {
    this.last = window.performance.now()
    this.setState({
      running: true
    })
  }

  onPause = () =>
    this.setState({
      running: false
    })

  onReset = () =>
    this.setState({
      remaining: this.props.duration
    })

  render () {
    const { running, remaining } = this.state

    return (
      <div className='Countdown'>
        <p>{Math.trunc(remaining)}</p>
        <div>
          {running
            ? <button onClick={this.onPause}>Pause</button>
            : <button onClick={this.onStart}>Start</button>}
          <button onClick={this.onReset}>Reset</button>
        </div>
      </div>
    )
  }
}

export default Countdown

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Countdown.css'

import Display from './Display'

class Countdown extends Component {
  static propTypes = {
    done: PropTypes.element,
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

        if (remaining > 0) {
          return { remaining }
        }

        return {
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

  render () {
    const { done } = this.props
    const { running, remaining } = this.state

    return (
      <div className='Countdown'>
        {!running && !remaining
          ? done
          : <React.Fragment>
            <Display value={Math.trunc(remaining)} />
            <div>
              {running
                ? <button onClick={this.onPause}>Pause</button>
                : <button onClick={this.onStart}>Start</button>}
            </div>
          </React.Fragment>}
      </div>
    )
  }
}

export default Countdown

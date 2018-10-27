import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Countdown.css'

class Countdown extends Component {
  static propTypes = {
    duration: PropTypes.number
  }

  constructor (props) {
    super(props)

    this.state = {
      remaining: props.duration
    }
  }

  componentDidMount () {
    this.time = window.performance.now()
    this.update()
  }

  componentWillUnmount () {
    window.cancelAnimationFrame(this.nextFrame)
  }

  update = () => {
    const remaining =
      this.props.duration - (window.performance.now() - this.time) / 1000

    if (remaining >= 0) {
      this.setState({ remaining })
    }

    this.nextFrame = window.requestAnimationFrame(this.update)
  }

  render () {
    const { remaining } = this.state

    return (
      <div className='Countdown'>
        <p>{Math.trunc(remaining)}</p>
      </div>
    )
  }
}

export default Countdown

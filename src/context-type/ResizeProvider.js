import React, { Component } from 'react'
import PropTypes from 'prop-types'

export const Context = React.createContext({ width: 0, height: 0 })

class Resize extends Component {
  static propTypes = {
    children: PropTypes.element
  }

  state = {
    width: window.innerWidth,
    height: window.innerHeight
  }

  componentDidMount () {
    window.addEventListener('resize', this.onResize)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.onResize)
  }

  onResize = () => {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight
    })
  }

  render () {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export default Resize

import { Component } from 'react'
import PropTypes from 'prop-types'

class Resize extends Component {
  static propTypes = {
    children: PropTypes.func
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
    const { children: render } = this.props

    return render({ ...this.state })
  }
}

export default Resize

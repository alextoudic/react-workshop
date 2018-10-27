import React, { Component } from 'react'

import { Context } from './ResizeProvider'

class AnotherComponent extends Component {
  static contextType = Context

  componentDidMount () {
    console.log({ context: this.context })
  }

  render () {
    const { width, height } = this.context

    return <p>width: {width}, height: {height}</p>
  }
}

console.log({ contextType: AnotherComponent.contextType })

export default AnotherComponent

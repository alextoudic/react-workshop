import React from 'react'

import { Context } from './ResizeProvider'

const AnotherComponent = () => (
  <Context.Consumer>
    {({ width, height }) => <p>width: {width}, height: {height}</p>}
  </Context.Consumer>
)

export default AnotherComponent

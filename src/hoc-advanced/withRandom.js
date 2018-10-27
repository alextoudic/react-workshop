import React from 'react'

import getDisplayName from './getDisplayName'

export default (min, max) => WrappedComponent => {
  WrappedComponent.displayName = `withRandom(${getDisplayName(WrappedComponent)})`

  const value = Math.trunc(Math.random() * (max - min) + min)

  return props => (
    <WrappedComponent
      {...props}
      random={value}
    />
  )
}

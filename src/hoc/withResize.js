import React from 'react'

import Resize from './Resize'

export default Component => {
  Component.displayName = `withResize(${Component.displayName})`

  return props => (
    <Resize>
      {size => <Component {...props} resize={size} />}
    </Resize>
  )
}

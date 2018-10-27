import React from 'react'

import getDisplayName from './getDisplayName'
import Resize from './Resize'

export default WrappedComponent => {
  WrappedComponent.displayName = `withResize(${getDisplayName(WrappedComponent)})`

  return props => (
    <Resize>
      {size => <WrappedComponent {...props} resize={size} />}
    </Resize>
  )
}

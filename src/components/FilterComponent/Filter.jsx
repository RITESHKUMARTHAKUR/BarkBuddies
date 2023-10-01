import React from 'react'
import {useFloating} from '@floating-ui/react';
const Filter = () => {
    const {refs, floatingStyles} = useFloating();

  return (
    <div className=' h-screen pt-20'>
       <button ref={refs.setReference}>Button</button>
      <div ref={refs.setFloating} style={floatingStyles}>
        Tooltip
      </div>
    </div>
  )
}

export default Filter

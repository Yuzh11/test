import React, { useState } from 'react'
import PropTypes from 'prop-types'

function Button(props:any) {
    const [count,setCount] = useState<any>(0);
  return (
    <div data-testid="button">
        <button aria-label='button' onClick={()=>setCount(count+1)}>{count}</button>
    </div>
  )
}

Button.propTypes = {}

export default Button

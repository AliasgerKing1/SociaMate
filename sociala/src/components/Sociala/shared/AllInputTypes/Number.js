import React from 'react'

const Number = () => {
  return (
    <div>
                             <input
                      name={name}
                      placeholder={placeholder}
                      className={classes}
                      type="number"
                      onChange={change}
                      onBlur={blur}
                    />
    </div>
  )
}

export default Number
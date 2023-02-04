import React from 'react'

const Text = ({placeholder, name, change, blur,classes,value}) => {
  return (
    <div>
                            <input
                      name={name}
                      placeholder={placeholder}
                      className={classes}
                      type="text"
                      onChange={change}
                      onBlur={blur}
                      value={value}
                    />
    </div>
  )
}

export default Text
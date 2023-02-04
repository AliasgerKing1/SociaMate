import React from 'react'

const CheckBox = ({id, classes}) => {
  return (
    <div>
                            <input
                      type="checkbox"
                      className={classes}
                      id={id}
                    />
    </div>
  )
}

export default CheckBox
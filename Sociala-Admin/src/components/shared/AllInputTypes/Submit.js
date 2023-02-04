import React from 'react'

const Submit = ({ value, classes }) => {
  return (
    <div>
         <input
                        type="submit"
                        className={classes}
                        value={value} 
                        style={{border : 'none'}}
                        />
    </div>
  )
}

export default Submit
import React from 'react'

const Select = ({placeholder , name, change, blur, classes, value}) => {
  return (
    <>
                              <select
                      name={name}
                      placeholder={placeholder}
                      className={classes}
                      onChange={change}
                      onBlur={blur}> 
                      <option value="">Select</option>
                        {
                          value.map((x, i)=> {
                            return(
                      <option key={i}>
{x}
                      </option>
                            )
                          }  )
                        }
                      
                      </select>
    </>
  )
}

export default Select
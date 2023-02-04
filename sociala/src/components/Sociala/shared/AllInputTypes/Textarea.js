import React from 'react'

const Textarea = ({placeholder, name, change, blur,classes, row}) => {
  return (
    <>
        <textarea 
        className={classes}
        name={name} 
        rows={row}
        onChange={change}
        onBlur={blur}
         placeholder={placeholder}
         spellCheck="false"
         >

         </textarea>
    </>
  )
}

export default Textarea
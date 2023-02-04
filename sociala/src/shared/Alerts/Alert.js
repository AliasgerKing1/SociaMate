import React from 'react'

const AlertDanger = (props) => {
  return (
    <>
<div className="alert alert-danger" role="alert">
<strong>
{props.msg}
</strong>
</div>
    </>
  )
}
const AlertSuccess = (props) => {
  return (
    <>
<div className="alert alert-success" role="alert">
<strong>
{props.msg}
</strong>
</div>
    </>
  )
}
const AlertInfo = (props) => {
  return (
    <>
<div className="alert alert-info" role="alert">
<strong>
{props.msg}
</strong>
</div>
    </>
  )
}
const AlertWarning = (props) => {
  return (
    <>
<div className="alert alert-warning" role="alert">
<strong>
{props.msg}
</strong>
</div>
    </>
  )
}


export {AlertDanger, AlertInfo, AlertSuccess, AlertWarning}

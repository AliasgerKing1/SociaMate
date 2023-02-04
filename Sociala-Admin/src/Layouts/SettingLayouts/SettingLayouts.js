import React, { useEffect } from 'react'
import { Outlet,useNavigate } from 'react-router-dom'
const SettingLayouts = () => {
  let navigate = useNavigate();
  useEffect(()=> {
    if(! localStorage.getItem("Admintoken")) {
      navigate("/admin/lockscreen")
      }
  })

  return (
    <div>
<Outlet/>
    </div>
  )
}

export default SettingLayouts
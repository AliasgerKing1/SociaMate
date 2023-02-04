import React from 'react';
import Setting from '../../../components/pages/Setting/Setting';
import Profile from "../../../components/pages/Profile/Profile"
let SettingRoutes = [
  {
    path : "setting",
    element: <Setting />
  },
  {
    path : "profile",
    element: <Profile />
  },

]
export default SettingRoutes;

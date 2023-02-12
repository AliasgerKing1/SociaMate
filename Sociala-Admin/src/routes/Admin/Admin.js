import React from 'react';

import Home from '../..//components/pages/dashboards/Home/Home';
import Analytics from "../../components/pages/dashboards/Analytics/Analytics"
import Crm from "../../components/pages/dashboards/Crm/Crm";
import Crypto from '../../components/pages/dashboards/Crypto/Crypto';
import Nft from "../../components/pages/dashboards/Nft/Nft";
import Job from "../../components/pages/dashboards/Job/Job";
import Projects from "../../components/pages/dashboards/Projects/Projects";


import AppCalender from '../../components/pages/Apps/AppCalender/AppCalender'; 
import AppChat from '../../components/pages/Apps/AppChat/AppChat';
import Companies from '../../components/pages/Apps/AppCrm/Companies/Companies';
import AppContacts from '../../components/pages/Apps/AppCrm/AppContacts/AppContacts';
import AppDeals from '../../components/pages/Apps/AppCrm/AppDeals/AppDeals';
import AppLeads from '../../components/pages/Apps/AppCrm/AppLeads/AppLeads';
import Profile from '../../components/pages/Profile/Profile';
import TaskBoard from '../../components/pages/TaskBoard/TaskBoard';
import Screeno from '../../components/pages/dashboards/Screeno/Screeno';

import LockScreen from '../../components/pages/Authentication/LockScreen/LockScreen';
import SettingLayouts from '../../Layouts/SettingLayouts/SettingLayouts';
import SettingRoutes from './SettingRoutes/SettingRoutes';
import TaskDetails from '../../components/pages/TaskBoard/TaskDetails/TaskDetails';
import FileManager from '../../components/pages/Apps/File Manager/FileManager';
import FolderDetails from '../../components/pages/Apps/File Manager/folderdetails/FolderDetails';
import FolderDetails2innner from '../../components/pages/Apps/File Manager/folderdetails/FolderDetails2innner';


let adminRoutes = [
  {
    path : "home",
    element: <Home/>
  },
  {
    path : "analytics",
    element: <Analytics />
  },
  {
    path : "crm",
    element: <Crm />
  },
  {
    path : "crypto",
    element: <Crypto />
  },
  {
    path : "nft",
    element: <Nft />
  },
  {
    path : "job",
    element: <Job />
  },
  {
    path : "screeno",
    element: <Screeno />
  },
  {
    path : "projects",
    element: <Projects />
  },
  {
    path : "app/calender",
    element: <AppCalender />
  },
  {
    path : "app/chat",
    element: <AppChat />
  },
  {
    path : "app/companies",
    element: <Companies />
  },
  {
    path : "app/contacts",
    element: <AppContacts />
  },
  {
    path : "app/deals",
    element: <AppDeals />
  },
  {
    path : "app/leads",
    element: <AppLeads />
  },
  {
    path : "profile",
    element: <Profile />
  },
  {
    path : "taskboard",
    element: <TaskBoard />
  },
  {
    path : "taskboard/details/:id",
    element: <TaskDetails />
  },
  {
    path : "lockscreen",
    element: <LockScreen />
  },
  {
    path : "filemanager",
    element: <FileManager />
  },
  {
    path : "folder/details/:id",
    element: <FolderDetails/>
  },
  {
    path : "folder/details/:id/next/:name",
    element: <FolderDetails2innner/>
  },
  {
    path : "setting/auth",
    element: <SettingLayouts/>,
    children : SettingRoutes
  },
]
export default adminRoutes;

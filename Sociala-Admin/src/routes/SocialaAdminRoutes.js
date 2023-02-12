import { useRoutes,useLocation } from "react-router-dom";

import AdminLayouts from "../Layouts/AdminLayouts/AdminLayouts";
import Logout from "../components/pages/Authentication/Logout/Logout";
import adminRoutes from "./Admin/Admin";
import Login from "../components/pages/Authentication/Login";
import NotFoundError from "../components/pages/Errors/NotFoundError";

const SocialaAdminRoutes = () => {
  // let location = useLocation();
  // console.log(location)
const router = useRoutes([

    {
      path : "/admin",
      element: <Login />
    },
    {
      path : "/admin/logout",
      element: <Logout />
    },
{
  path : "/admin",
  element: <AdminLayouts/>,
  children : adminRoutes
},
{
  path : "*",
  element: <NotFoundError />
},
  ])
  return (router);
}


export default SocialaAdminRoutes;
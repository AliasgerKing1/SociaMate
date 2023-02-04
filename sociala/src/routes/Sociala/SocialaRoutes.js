import { useRoutes } from "react-router-dom";

import UserLayouts from "../../UserLayouts/UserLayouts";
import userRoutes from "./User/User";

import Register from "../../components/Sociala/pages/Register/Register";
import Login from "../../components/Sociala/pages/Login/Login";

import Error from "../../components/Sociala/pages/Error/Error";

const SocialaRoutes = () => {
const router = useRoutes([

    {
      path : "register",
      element: <Register />
    },
    {
      path : "/",
      element: <Login />
    },
{
  path : "auth",
  element: <UserLayouts />,
  children : userRoutes
},
    {
      path : "*",
      element: <Error />
    },
  ])
  return (router);
}


export default SocialaRoutes;
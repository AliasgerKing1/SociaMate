import Home from "../../../components/Sociala/pages/Home/Home";
import Setting from "../../../components/Sociala/pages/Setting/Setting";
import Stories from "../../../components/Sociala/pages/Stories/Stories";
import Video from "../../../components/Sociala/pages/Video/Video";
import Groups from "../../../components/Sociala/pages/Group/Group";
import Shop from "../../../components/Sociala/pages/Shop/Shop";
import Email from "../../../components/Sociala/pages/Email/Email/Email";
import EmailOpen from "../../../components/Sociala/pages/Email/EmailOpen/EmailOpen";
import ComingSoon from "../../../components/Sociala/pages/ComingSoon/ComingSoon";
import LiveStream from "../../../components/Sociala/pages/LiveStream/LiveStream";
import Analytics from "../../../components/Sociala/pages/Analytics/Analytics";
import Chat from "../../../components/Sociala/pages/Chat/Chat";
import Accountinfo from "../../../components/Sociala/pages/Settings/AccountInfo/Accountinfo";
import Contactinfo from "../../../components/Sociala/pages/Settings/ContactInfo/ContactInfo";
import Social from "../../../components/Sociala/pages/Settings/Social/Social";
import Card from "../../../components/Sociala/pages/Settings/Card/Card";
import Password from "../../../components/Sociala/pages/Settings/Password/Password";
import Help from "../../../components/Sociala/pages/Settings/Help/Help";
import Notifications from "../../../components/Sociala/pages/Settings/Notifications/Notifications";
import Hotel from "../../../components/Sociala/pages/Hotel/Hotel/Hotel";
import Event from "../../../components/Sociala/pages/Event/Event";
import HotelDetails from "../../../components/Sociala/pages/Hotel/HotelDetails/HotelDetails";
import UserProfile from "../../../components/Sociala/pages/UserProfile/UserProfile";
import SinglePageShop from "../../../components/Sociala/pages/SinglePageShop/SinglePageShop";
import Job from "../../../components/Sociala/pages/Job/Job";
import Users from "../../../components/Sociala/pages/Users/Users";
import ForgetPassword from "../../../components/Sociala/pages/forgetPassword/ForgetPassword";

// import Parents from "../components/Sociala/pages/Parents";

let userRoutes = [
    {
      path : "home",
      element: <Home/>
    },
    {
      path : "stories",
      element: <Stories />
    },
    {
      path : "setting",
      element: <Setting />
    },
    {
      path : "video",
      element: <Video />
    },
    {
      path : "group",
      element: <Groups />
    },
    {
      path : "shop",
      element: <Shop />
    },
    {
      path : "email",
      element: <Email />
    },
    {
      path : "email/open",
      element: <EmailOpen />
    },
    {
      path : "comingsoon",
      element: <ComingSoon />
    },
    {
      path : "livestream",
      element: <LiveStream />
    },
    {
      path : "analytics",
      element: <Analytics />
    },
    {
      path : "chat",
      element: <Chat />
    },
    {
      path : "hotel",
      element: <Hotel />
    },
    {
      path : "hotel/details",
      element: <HotelDetails />
    },
    {
      path : "event",
      element: <Event />
    },
    {
      path : "user/profile",
      element: <UserProfile />
    },
    {
      path : "shop/single/product",
      element: <SinglePageShop />
    },
    {
      path : "job",
      element: <Job />
    },
    {
      path : "users",
      element: <Users />
    },
    {
      path : "forget/password",
      element: <ForgetPassword />
    },
    {
      path : "setting/account/info",
      element: <Accountinfo />
    },
    {
      path : "setting/saveaddress",
      element: <Contactinfo />
    },
    {
      path : "setting/social",
      element: <Social />
    },
    {
      path : "setting/card",
      element: <Card />
    },
    {
      path : "setting/password",
      element: <Password />
    },
    {
      path : "setting/help",
      element: <Help />
    },
    {
      path : "setting/notifications",
      element: <Notifications />
    },
  ]
export default userRoutes;

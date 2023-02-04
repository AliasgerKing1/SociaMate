const routes = require("express").Router();

routes.use("/api/user", require("../controller/UserController"));
routes.use("/api/userprofile", require("../controller/UserProfileController"));
routes.use("/api/post/message", require("../controller/MsgController"));
routes.use("/api/country", require("../controller/CountryCityController"));




//Admin
routes.use("/api/admin/login", require("../controller/Admin/LoginController"));
routes.use("/api/admin/profile", require("../controller/Admin/UserController"));
routes.use("/api/admin/profile/photo", require("../controller/Admin/ProfilePhoto/ProfilePhoto"));
routes.use("/api/admin/lockscreen", require("../controller/Admin/ProfilePhoto/LockScreen/LockscreenController"));
routes.use("/api/admin/taskboard", require("../controller/Admin/TaskBoardController"));

module.exports = routes;

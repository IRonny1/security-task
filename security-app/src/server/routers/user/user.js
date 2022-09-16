const Router = require("express").Router;
const UserController = require("../../controllers/User/UserController");
const router = new Router();

router.get("/user/me", UserController.currentUser);

router.post("/login", UserController.login);
router.post("/logout", UserController.logout);
router.post("/registration", UserController.registration);

module.exports = router;

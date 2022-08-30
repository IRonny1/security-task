const Router = require("express");
const UserController = require("../../controllers/User/UserController");

const router = new Router();

router.post("/login", UserController.login);
router.post("/logout", UserController.logout);

module.exports = router;

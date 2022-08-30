const Router = require("express");

const router = new Router();

router.get("/users");
router.get("/user/:userId");

module.exports = router;

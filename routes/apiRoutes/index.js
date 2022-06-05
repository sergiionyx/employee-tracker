const express = require("express");
const router = express.Router();

router.use(require("./rolesRoutes"));
router.use(require("./deptsRoutes"));
router.use(require("./empsRoutes"));

module.exports = router;

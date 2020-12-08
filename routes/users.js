const { Router } = require("express");
const app = require("../app");
const router = new Router();
const { create } = require("./../controllers/users");
const { validateCreate } = require("./../middlewares/user");

router.post("/", validateCreate, create);

module.exports = router;

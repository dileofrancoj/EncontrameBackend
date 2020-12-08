const { Router } = require("express");
const app = require("../app");
const router = new Router();
const { create } = require("./../controllers/users");

router.post("/", create);

module.exports = router;

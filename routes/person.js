const { Router, Request, Response } = require("express");
const router = new Router();
const { create, all } = require("./../controllers/person");
router.post("/", create);
router.get("/", all);

module.exports = router;

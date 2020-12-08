const { Router, Request, Response } = require("express");
const router = new Router();
const { create, all, single } = require("./../controllers/person");
router.post("/", create);
router.get("/", all);
router.get("/:id", single);
module.exports = router;

const Router = require("express");
const router = new Router();

const SportController = require("../controller/controller");

router.post("/sport", SportController.createSport);
router.get("/sport", SportController.getSport);

module.exports = router;

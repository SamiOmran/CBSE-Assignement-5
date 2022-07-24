const express = require('express');
const router = express.Router();
const controller = require("./controller");

router.get("/employee/:id", controller.specificEmployee)
router.get("/all-employees", controller.allEmployees)

module.exports = router;
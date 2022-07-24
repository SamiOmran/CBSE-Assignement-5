const employeeController = require("./employeeController");
const express = require('express');
const router = express.Router();

router.get("/employee/:id", employeeController.specificEmployee)
router.get("/all-employees", employeeController.dashboard)

module.exports = router;
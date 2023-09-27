const express = require("express");
const VC = require("../controllers/viewController");

const router = express.Router();

router.get("/users", VC.viewAllUser);
router.get("/users/create", VC.viewCreateUser);
router.get("/users/update/:oldName", VC.viewUpdateUser);

module.exports = router;

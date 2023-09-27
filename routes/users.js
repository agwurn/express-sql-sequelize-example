const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router.post("/", userController.createUser);
router.get("/", userController.getAllUser);
router.get("/:name", userController.getUser);
router.put("/:oldName", userController.updateUser);
router.delete("/:name", userController.deleteUser);

module.exports = router;

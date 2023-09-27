const express = require("express");
const UC = require("../controllers/userController");

const router = express.Router();

router.post("/", UC.createUser);
router.get("/", UC.getAllUser);
router.get("/:name", UC.getUser);
router.put("/:oldName", UC.updateUser);
router.delete("/:name", UC.deleteUser);

module.exports = router;

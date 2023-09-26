const express = require("express");
const User = require("../models/users");

const router = express.Router();

// 1. [create] 新增用戶
router.post("/", async (req, res) => {
  const { name, email } = req.body;

  try {
    const user = await User.create({ name, email });
    console.log("成功創建用戶");
    res.status(201).json(user);
  } catch (err) {
    console.error("無法創建用戶", err);
    res.status(500).json({ error: "無法創建用戶" });
  }
});

// 2. [read] 獲取所有用戶
router.get("/", async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    console.error("無法獲取用戶", err);
    res.status(500).json({ error: "無法獲取用戶" });
  }
});

// 3. [read] 獲取特定用戶
router.get("/:name", async (req, res) => {
  const name = req.params.name;

  try {
    const user = await User.findOne({
      where: { name: name },
    });

    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: "用戶未找到" });
    }
  } catch (err) {
    console.log("無法獲取用戶", err);
    res.status(500).json({ error: "無法獲取用戶" });
  }
});

// 4. [update] 更新用戶
router.put("/:oldName", async (req, res) => {
  const oldName = req.params.oldName;
  const { name, email } = req.body;

  try {
    const user = await User.findOne({
      where: { name: oldName },
    });
    if (user) {
      user.name = name;
      user.email = email;
      await user.save();
      res.json(user);
    } else {
      res.status(404).json({ message: "用戶不存在" });
    }
  } catch (err) {
    console.log("無法更新用戶", err);
    res.status(500).json({ error: "無法更新用戶" });
  }
});

// 5. [delete] 刪除用戶
router.delete("/:name", async (req, res) => {
  const name = req.params.name;

  try {
    const user = await User.findOne({
      where: { name: name },
    });
    if (user) {
      await user.destroy();
      res.json({ message: `用戶'${name}'已刪除` });
    } else {
      res.status(404).json({ error: "用戶不存在" });
    }
  } catch (err) {
    res.status(500).json({ error: "無法刪除用戶" });
  }
});

module.exports = router;

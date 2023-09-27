const User = require("../models/users");
const logger = require("../logger");

// 1. [create] 新增用戶
const createUser = async (req, res) => {
  const { name, email } = req.body;

  try {
    const user = await User.create({ name, email });
    logger.info(`成功創建用戶: ${user.name}`);
    res.status(201).json(user);
  } catch (err) {
    logger.error("無法創建用戶", err);
    res.status(500).json({ error: "無法創建用戶" });
  }
};

// 2. [read] 獲取所有用戶
const getAllUser = async (req, res) => {
  try {
    const users = await User.findAll();
    logger.info("成功獲取所有用戶");
    res.json(users);
  } catch (err) {
    logger.error("無法獲取所有用戶", err);
    res.status(500).json({ error: "無法獲取所有用戶" });
  }
};

// 3. [read] 獲取特定用戶
const getUser = async (req, res) => {
  const name = req.params.name;

  try {
    const user = await User.findOne({
      where: { name: name },
    });

    if (user) {
      logger.info(`成功獲取用戶: ${user.name}`);
      res.json(user);
    } else {
      logger.warn(`用戶未找到: ${name}`);
      res.status(404).json({ message: "用戶未找到" });
    }
  } catch (err) {
    logger.log(`無法獲取用戶: ${name}`, err);
    res.status(500).json({ error: "無法獲取用戶" });
  }
};

// 4. [update] 更新用戶
const updateUser = async (req, res) => {
  console.log('hi')
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
      logger.info(`成功更新用戶: ${oldName}`);
      res.json(user);
    } else {
      logger.warn(`用戶不存在: ${oldName}`);
      res.status(404).json({ message: "用戶不存在" });
    }
  } catch (err) {
    logger.error("無法更新用戶", err);
    res.status(500).json({ error: "無法更新用戶" });
  }
};

// 5. [delete] 刪除用戶
const deleteUser = async (req, res) => {
  const name = req.params.name;

  try {
    const user = await User.findOne({
      where: { name: name },
    });
    if (user) {
      await user.destroy();
      logger.info(`成功刪除用戶: ${name}`);
      res.json({ message: `用戶'${name}'已刪除` });
    } else {
      logger.warn(`用戶不存在: ${name}`);
      res.status(404).json({ error: "用戶不存在" });
    }
  } catch (err) {
    logger.error(`無法刪除用戶`, err);
    res.status(500).json({ error: "無法刪除用戶" });
  }
};

module.exports = {
  createUser,
  getAllUser,
  getUser,
  updateUser,
  deleteUser,
};

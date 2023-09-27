const express = require("express");
require("dotenv").config();
const usersRouter = require("./routes/users");
const sequelize = require("./config/database");
const path = require("path");

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));

app.use(express.json());

app.get("/", (req, res) => {
  const title = "My App";
  res.render("index", { title: title }); // 使用模板引擎渲染视图
});
app.get("/users/create", (req, res) => {
  res.render("createUser");
});
app.get("/users", (req, res) => {
  res.render("users");
});
app.get("/users/update/:oldName", (req, res) => {
  const oldName = req.params.oldName;
  res.render("updateUser", { oldName });
});

app.use("/api/users", usersRouter);

sequelize
  .sync()
  .then(() => {
    console.log("模型已成功同步到數據庫");
  })
  .catch((err) => {
    console.log("無法同步模型到數據庫", err);
  });

app.listen(port, () => {
  console.log(`[server] running on port ${port}`);
});

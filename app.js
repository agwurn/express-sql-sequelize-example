const express = require("express");
require('dotenv').config(); 

const app = express();
const port = 3000;

const usersRouter = require("./routes/users");
const sequelize = require("./config/database");

app.use(express.json());
app.use("/users", usersRouter);

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

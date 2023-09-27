const viewAllUser = (req, res) => {
  res.render("users");
}

const viewCreateUser = (req, res) => {
  res.render("createUser");
}

const viewUpdateUser = (req, res) => {
  const oldName = req.params.oldName;
  res.render("updateUser", { oldName });
}


module.exports = {
  viewAllUser,
  viewCreateUser,
  viewUpdateUser,
}
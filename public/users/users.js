const userList = document.getElementById("userList");

const displayUsers = async () => {
  userList.innerHTML = "";
  const users = await handleGetUsers();

  users.forEach((user) => {
    const listItem = document.createElement("li");
    listItem.textContent = `name: ${user.name}, email: ${user.email}`;

    const updateButton = document.createElement("button");
    updateButton.textContent = "編輯";
    updateButton.addEventListener("click", () => handleNavToUpdateUser(user));

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "删除";
    deleteButton.addEventListener("click", () => handleDeleteUser(user));

    // 将删除按钮添加到列表项
    listItem.appendChild(updateButton);
    listItem.appendChild(deleteButton);
    userList.appendChild(listItem);
  });
};

const handleGetUsers = async () => {
  try {
    const response = await fetch("/api/users");
    const users = await response.json();
    return users;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const handleNavToUpdateUser = (user) => {
  window.location.href = `/users/update/${user.name}`;
};

const handleDeleteUser = async (user) => {
  try {
    // 发送删除请求到服务器
    await fetch(`/api/users/${user.name}`, {
      method: "DELETE",
    });

    // 重新加载用户列表
    alert(`用戶 ${user.name} 已成功刪除`);
    displayUsers();
  } catch (error) {
    console.error(error);
  }
};

displayUsers();

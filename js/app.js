function handlerCreateUser() {
  const main = document.getElementById("main");
  const name = document.getElementById("name").value;

  const users = document.createElement("ul");
  users.className = "users-list";
  main.appendChild(users);

  const user = document.createElement("li");
  user.className = "user-item";
  users.appendChild(user);
}

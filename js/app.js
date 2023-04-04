function handlerCreateUser() {
  const main = document.getElementById("main");
  const name = document.getElementById("name").value;

  const users = document.createElement("ul");
  users.className = "users-list";
  main.appendChild(users);

  const user = document.createElement("li");
  user.className = "user-item";
  users.appendChild(user);

  const card = document.createElement("div");
  card.className = "card user-item__content";
  user.appendChild(card);

  const link = document.createElement("a");
  link.href = "#";
  card.appendChild(link);

  const avatar = document.createElement("div");
  avatar.className = "user-item__image avatar";
  link.appendChild(avatar);

  const imagen = document.createElement("img");
  imagen.src = `/img/${name}.jpg`;
  imagen.alt = name;
  avatar.appendChild(imagen);

  const userInfo = document.createElement("div");
  userInfo.className = "user-item__info";
  link.appendChild(userInfo);

  const nombreUser = document.createElement("h2");
  nombreUser.innerText = name;
  userInfo.appendChild(nombreUser);

  const twitterUser = document.createElement("h3");
  twitterUser.innerText = `@${name}`;
  userInfo.appendChild(twitterUser);
}

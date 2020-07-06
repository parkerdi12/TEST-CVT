const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const loginButton = document.getElementById("check");
const loginInput = document.getElementById("login");
const passwordInput = document.getElementById("password");
const userName = document.getElementById("userName");
const logoutButton = document.getElementById("btnClose");

// Табы

window.onload = function () {
  window.location.href = "#tabs_01";
  userName.value = localStorage.getItem("nickname");
};



// Modal

btn.onclick = function () {
  modal.style.display = "block";
};

window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

// Авторизация

// Массив пользоателей
const dataBase = [
  {
    id: 1,
    login: "kostya",
    password: "12345678",
    nickname: "Константин К.",
  },
  {
    id: 2,
    login: "petya",
    password: "12345678",
    nickname: "Петя Пупкин",
  },
  {
    id: 3,
    login: "vanya",
    password: "12345678",
    nickname: "Ваня Пупкин",
  },
];

function login(login, password) {
  const user = dataBase.find(function (element) {
    if (element.login === login && element.password === password) {
      return element;
    }
  });

  if (user) {
    localStorage.setItem("nickname", user.nickname);
    modal.style.display = "none";
    btn.style.display = "none";
    userName.value = user.nickname;
  } else {
    alert("Пользователь не найден!");
    userName.style.display = 'none';
    logoutButton.style.display = "none";
  }
}

loginButton.onclick = function (event) {
  event.preventDefault();
  event.stopPropagation();

  logoutButton.style.display = "block";
  userName.style.display = "block";

  const userLogin = loginInput.value;
  const userPassword = passwordInput.value;
  login(userLogin, userPassword);
};

window.onload = function (event) {
  userName.style.display = 'block';
  userName.value = localStorage.getItem("nickname");
  btn.style.display = "none";
  logoutButton.style.display = "block";
 };

logoutButton.onclick = function () {
  btn.style.display = "block";
  userName.style.display = "none";
  logoutButton.style.display = "none";
};





// Modal

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");

btn.onclick = function () {
  modal.style.display = "block";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Авторизация

document.getElementById("check").onclick = function () {
  let login = document.getElementById("login").value;
  let result = login;
  document.getElementById('result-login').innerHTML = result;
};



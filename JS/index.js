let button = document.querySelector("a");
button.addEventListener("click", function () {
  window.location = "../Login/signup.html";
});
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");
let container = [];
if (localStorage.getItem("inputs") !== null) {
  container = JSON.parse(localStorage.getItem("inputs"));
}

function access() {
  for (let i = 0; i < container.length; i++) {
    if (
      emailInput.value === container[i].email &&
      passwordInput.value === container[i].password
    ) {
      localStorage.setItem("name", container[i].name);
      window.location = "../Login/home.html";
      return true;
    }
  }
  document.querySelector(".danger").classList.remove("d-none");
  return false;
}

let button2 = document.querySelector(".login");
button2.addEventListener("click", function () {
  access();
  button2.style.color = "white";
});
emailInput.addEventListener("keyup", function () {
  for (let i = 0; i < container.length; i++) {
    if (emailInput.value === container[i].email) {
      emailInput.classList.add("is-valid");
      emailInput.classList.remove("is-invalid");
      document.querySelector(".danger").classList.add("d-none");
    } else {
      emailInput.classList.remove("is-valid");
      emailInput.classList.add("is-invalid");
    }
  }
});
passwordInput.addEventListener("keyup", function () {
  for (let i = 0; i < container.length; i++) {
    if (passwordInput.value === container[i].password) {
      passwordInput.classList.add("is-valid");
      passwordInput.classList.remove("is-invalid");
      document.querySelector(".danger").classList.add("d-none");
    } else {
      passwordInput.classList.remove("is-valid");
      passwordInput.classList.add("is-invalid");
    }
  }
});

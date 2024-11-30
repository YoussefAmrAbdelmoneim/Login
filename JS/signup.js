let button = document.querySelector("a");
button.addEventListener("click", function () {
  window.location = "../Login/index.html";
});
let button2 = document.querySelector("button");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");
let nameInput = document.getElementById("name");
let container = [];
button2.addEventListener("click", function () {
  button2.style.color = "white";
  inputField();
});
if (localStorage.getItem("inputs") !== null) {
  container = JSON.parse(localStorage.getItem("inputs"));
}
function inputField() {
  if (
    nameInput.value !== "" &&
    passwordInput.value !== "" &&
    emailInput.value !== ""
  ) {
    if (isduplicate()) {
      document.querySelector(".exist").classList.remove("d-none");
      document.querySelector(".pass").classList.add("d-none");
      document.querySelector(".danger").classList.add("d-none");
      return;
    }
    if (emailValidation() && passwordValidation() && userNameValidation()) {
      let input = {
        name: nameInput.value,
        email: emailInput.value,
        password: passwordInput.value,
      };
      container.push(input);
      localStorage.setItem("inputs", JSON.stringify(container));
      document.querySelector(".pass").classList.remove("d-none");
      document.querySelector(".exist").classList.add("d-none");
      document.querySelector(".danger").classList.add("d-none");
      clearForm();
    }
  } else {
    document.querySelector(".exist").classList.add("d-none");
    document.querySelector(".danger").classList.remove("d-none");
    document.querySelector(".pass").classList.add("d-none");
  }
}
function isduplicate() {
  for (let i = 0; i < container.length; i++) {
    if (emailInput.value === container[i].email) {
      return true;
    }
  }
  return false;
}
nameInput.addEventListener("keyup", function () {
  userNameValidation();
});
emailInput.addEventListener("keyup", function () {
  emailValidation();
});
passwordInput.addEventListener("keyup", function () {
  passwordValidation();
});
function userNameValidation() {
  let alertMsg = document.querySelector(".alertM");
  let regex = /^[a-z0-9_-]{3,15}$/;
  let checkName = nameInput.value;
  if (regex.test(checkName)) {
    alertMsg.classList.add("d-none");
    nameInput.classList.add("is-valid");
    nameInput.classList.remove("is-invalid");
    document.querySelector(".danger").classList.add("d-none");
    return true;
  } else {
    alertMsg.classList.remove("d-none");
    nameInput.classList.remove("is-valid");
    nameInput.classList.add("is-invalid");
    return false;
  }
}
function emailValidation() {
  let alertMsg = document.querySelector(".alertMsg");
  let alertMs = document.querySelector(".alertMs");
  let regex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  let checkEmail = emailInput.value;
  if (regex.test(checkEmail) && !isduplicate()) {
    alertMsg.classList.add("d-none");
    emailInput.classList.add("is-valid");
    alertMs.classList.add("d-none");
    emailInput.classList.remove("is-invalid");
    document.querySelector(".danger").classList.add("d-none");
    return true;
  } else if (isduplicate()) {
    alertMsg.classList.add("d-none");
    alertMs.classList.remove("d-none");
    emailInput.classList.remove("is-valid");
    emailInput.classList.add("is-invalid");
  } else {
    alertMs.classList.add("d-none");
    alertMsg.classList.remove("d-none");
    emailInput.classList.remove("is-valid");
    emailInput.classList.add("is-invalid");
    return false;
  }
}
function passwordValidation() {
  let alertMsg = document.querySelector(".alertMg");
  let regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
  let passwordCheck = passwordInput.value;
  if (regex.test(passwordCheck)) {
    alertMsg.classList.add("d-none");
    passwordInput.classList.add("is-valid");
    passwordInput.classList.remove("is-invalid");
    document.querySelector(".danger").classList.add("d-none");
    return true;
  } else {
    alertMsg.classList.remove("d-none");
    passwordInput.classList.remove("is-valid");
    passwordInput.classList.add("is-invalid");
    return false;
  }
}
function clearForm() {
  nameInput.value = null;
  emailInput.value = null;
  passwordInput.value = null;
  nameInput.classList.remove("is-valid");
  emailInput.classList.remove("is-valid");
  passwordInput.classList.remove("is-valid");
}
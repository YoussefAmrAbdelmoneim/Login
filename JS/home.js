let button = document.querySelector(".logout");
button.addEventListener("click", function () {
  window.location = "../Login/index.html";
  localStorage.removeItem("name");
});
let headerName = document.querySelector("h1");
headerName.append(localStorage.getItem("name"));

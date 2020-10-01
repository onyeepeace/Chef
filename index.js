// Select element function
const selectElement = function (element) {
  return document.querySelector(element);
};

let menuToggler = selectElement(".menu-toggle");
let body = selectElement("body");

menuToggler.addEventListener("click", function () {
  body.classList.toggle("open");
});

// Menu image hover
let ul = document.querySelector(".nav-list");
let home = document.querySelector(".home");
let about = document.querySelector(".about");
let cakes = document.querySelector(".cakes");
let contact = document.querySelector(".contact");

// home.addEventListener("mouseover", function (e) {
//   e.preventDefault();
//   // ul.style.backgroundImage = "url('images/ed2e735d-cf18-4455-8c0e-ef9c64058b2f.png')";
//   ul.style.backgroundColor = "red";
// });

// home.addEventListener("mouseout", function (e) {
//   e.preventDefault();
//   // ul.style.backgroundImage = "url('images/ed2e735d-cf18-4455-8c0e-ef9c64058b2f.png')";
//   ul.style.backgroundColor = "blue";
// });

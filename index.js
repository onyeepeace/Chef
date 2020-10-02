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

home.addEventListener("mouseover", function (e) {
  e.preventDefault();
  ul.style.backgroundImage =
    "url('images/ed2e735d-cf18-4455-8c0e-ef9c64058b2f.png')";
});

home.addEventListener("mouseout", function (e) {
  e.preventDefault();
  ul.style.backgroundColor = "#777";
  ul.style.backgroundImage = "none";
});

about.addEventListener("mouseover", function (e) {
  e.preventDefault();
  ul.style.backgroundImage =
    "url('images/2740810b97c20a4ec01265845c9dcbb5.jpg')";
  ul.style.backgroundRepeat = "no-repeat";
  ul.style.backgroundSize = "contain";
  ul.style.backgroundPosition = "center";
});

about.addEventListener("mouseout", function (e) {
  e.preventDefault();
  ul.style.backgroundColor = "#777";
  ul.style.backgroundImage = "none";
});

cakes.addEventListener("mouseover", function (e) {
  e.preventDefault();
  ul.style.backgroundImage =
    "url('images/ed2e735d-cf18-4455-8c0e-ef9c64058b2f.png')";
});

cakes.addEventListener("mouseout", function (e) {
  e.preventDefault();
  ul.style.backgroundColor = "#777";
  ul.style.backgroundImage = "none";
});

contact.addEventListener("mouseover", function (e) {
  e.preventDefault();
  ul.style.backgroundImage =
    "url('images/6c910cab1c2afff4887c66d979856f5d.jpg')";
});

contact.addEventListener("mouseout", function (e) {
  e.preventDefault();
  ul.style.backgroundColor = "#777";
  ul.style.backgroundImage = "none";
});

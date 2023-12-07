let isReduced =
  window.matchMedia(`(prefers-reduced-motion: reduce)`) === true ||
  window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true;

let instagramIcon = document.getElementById("instagram");
instagramIcon.addEventListener("mouseover", function () {
  if (!!isReduced) {
  } else {
    instagramIcon.classList.add("fa-spin");
  }
});
instagramIcon.addEventListener("mouseleave", function () {
  instagramIcon.classList.remove("fa-spin");
});

let linkedInIcon = document.getElementById("linkedin");
linkedInIcon.addEventListener("mouseover", function () {
  if (!!isReduced) {
  } else {
    linkedInIcon.classList.add("fa-spin");
  }
});
linkedInIcon.addEventListener("mouseleave", function () {
  linkedInIcon.classList.remove("fa-spin");
});

let emailIcon = document.getElementById("email");
emailIcon.addEventListener("mouseover", function () {
  if (!!isReduced) {
  } else {
    emailIcon.classList.add("fa-spin");
  }
});
emailIcon.addEventListener("mouseleave", function () {
  emailIcon.classList.remove("fa-spin");
});

window.onscroll = function () {
  myFunction();
};

let header = document.getElementById("header");
let sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("shadow");
  } else {
    header.classList.remove("shadow");
  }
}

let openHamburger = document.getElementById("hamburger-open");
let closeHamburger = document.getElementById("hamburger-close");
let links = document.querySelector(".mobile-links");
openHamburger.addEventListener("click", function () {
  openHamburger.style.display = "none";
  links.style.display = "block";
  links.style.top = "0";
  document.querySelector("main").style.opacity = "0%";
});

closeHamburger.addEventListener("click", function () {
  openHamburger.style.display = "block";
  document.querySelector(".mobile-links").style.display = "none";
  document.querySelector("main").style.opacity = "100%";
});

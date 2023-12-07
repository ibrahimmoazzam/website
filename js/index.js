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

let englishButton = document.getElementById("english");
let urduButton = document.getElementById("urdu");
let arabicButton = document.getElementById("arabic");

englishButton.addEventListener("click", function () {
  englishButton.classList.add("selected");
  if (urduButton.classList.contains("selected")) {
    urduButton.classList.remove("selected");
  } else if (arabicButton.classList.contains("selected")) {
    arabicButton.classList.remove("selected");
  }
  document.querySelector(".text").innerHTML = `<h1>Hi, I'm Ibrahim!</h1>
<div class="typing_container">
    <div class="subtitle">& an aspiring <b>UX Researcher</b></div>
</div>`;
});

urduButton.addEventListener("click", function () {
  urduButton.classList.add("selected");
  if (englishButton.classList.contains("selected")) {
    englishButton.classList.remove("selected");
  } else if (arabicButton.classList.contains("selected")) {
    arabicButton.classList.remove("selected");
  }
  document.querySelector(".text").innerHTML = `<h1>!سلام، میں ابراہیم ہوں</h1>
<div class="typing_container">
    <div class="subtitle">اور صارف کے تجربے کا خواہشمند محقق</div>
</div>`;
  document.querySelector(".subtitle").style.borderLeft = "0.15em solid orange";
  document.querySelector(".subtitle").style.borderRight = "none";
});

arabicButton.addEventListener("click", function () {
  arabicButton.classList.add("selected");
  if (urduButton.classList.contains("selected")) {
    urduButton.classList.remove("selected");
  } else if (englishButton.classList.contains("selected")) {
    englishButton.classList.remove("selected");
  }
  document.querySelector(".text").innerHTML = `<h1>!أَهْلً، انا ابراهيم</h1>
<div class="typing_container">
    <div class="subtitle">وباحث طموح في تجربة المستخدم</div>
</div>`;
  document.querySelector(".subtitle").style.borderLeft = "0.15em solid orange";
  document.querySelector(".subtitle").style.borderRight = "none";
});

let openHamburger = document.getElementById("hamburger-open");
let closeHamburger = document.getElementById("hamburger-close");
let links = document.querySelector(".mobile-links");
openHamburger.addEventListener("click", function () {
  openHamburger.style.display = "none";
  englishButton.disabled = true;
  urduButton.disabled = true;
  arabicButton.disabled = true;
  links.style.display = "block";
  links.style.top = "0";
  document.querySelector("main").style.opacity = "0%";
});

closeHamburger.addEventListener("click", function () {
  openHamburger.style.display = "block";
  document.querySelector(".mobile-links").style.display = "none";
  document.querySelector("main").style.opacity = "100%";
  englishButton.disabled = false;
  urduButton.disabled = false;
  arabicButton.disabled = false;
});

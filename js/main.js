let links = document.getElementsByClassName("nav-link");
let sections = document.querySelectorAll("section");
let navbar = document.querySelector(".navbar");

// put animations on sections
function secAnimate(section) {
  if (section.getBoundingClientRect().top < 600) {
    section.classList.add("show");
    section.classList.remove("hide");
  } else {
    section.classList.add("hide");
    section.classList.remove("show");
  }
}

window.addEventListener("scroll", () => {
  for (let i = 0; i < sections.length; i++) {
    secAnimate(sections[i]);
  }
});

// SCROLL TO THE SECTION WHEN LINK CLICKED
Array.from(links).forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    for (const section of sections) {
      if (this.href.split("#")[1] == section.id) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
});

// SET ACTIVE SECTIONS AND LINKS
setActive();
function setActive() {
  window.addEventListener("scroll", () => {
    for (const section of sections) {
      if (
        section.getBoundingClientRect().top < navbar.clientHeight &&
        section.getBoundingClientRect().top >=
          -section.getBoundingClientRect().height + navbar.clientHeight
      ) {
        section.classList.add("active");
        document.querySelector(`.${section.id}`).classList.add("active");
      } else {
        section.classList.remove("active");
        document.querySelector(`.${section.id}`).classList.remove("active");
      }
    }
  });
}

// SHOW ABOUT-BOX IN NAVBAR
showNavMenu();
function showNavMenu() {
  let btn = document.getElementById("drobdown-btn");
  let aboutBox = document.querySelector(".about-box");
  btn.addEventListener("click", () =>
    aboutBox.classList.toggle("show-about-box")
  );
}

let copyRight = document.querySelector("footer .copyright");
copyRight.innerText = `All Rights Reserved © ${new Date().getFullYear()} MTS Solutions.`;

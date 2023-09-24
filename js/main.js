// Set active Link and Section
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let links = document.querySelectorAll(".nav-link");

sections.forEach((sec) => {
  window.addEventListener("scroll", () => {
    let secTop = sec.getBoundingClientRect().top;
    let secHeight = sec.getBoundingClientRect().height;

    if (
      secTop < 0 + navbar.clientHeight &&
      secTop > -secHeight + navbar.clientHeight
    ) {
      sec.classList.add("active");
      if (sec.classList.contains("colored")) {
        navbar.classList.add("bg-white");
      } else {
        navbar.classList.remove("bg-white");
      }
    } else sec.classList.remove("active");
  });
});

window.addEventListener("scroll", () => {
  for (let i = 0; i < sections.length; i++) {
    if (sections[i].classList.contains("active")) {
      links[i].classList.add("active");
    } else {
      links[i].classList.remove("active");
    }
  }
});
let copyRight = document.querySelector("footer .copyright");
copyRight.innerText = `All Rights Reserved © ${new Date().getFullYear()} MTS Solutions.`;

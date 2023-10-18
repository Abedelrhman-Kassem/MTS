let links = document.getElementsByClassName("nav-link");
let sections = document.querySelectorAll("section");
let navbar = document.querySelector(".navbar");

// SCROLL TO THE SECTION WHEN LINK CLICKED
Array.from(links).forEach((link) => {
  clickLink(link);
});

function clickLink(link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    for (const section of sections) {
      if (this.href.split("#")[1] == section.id) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
}

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

// Contact Form
let contactForm = document.querySelector(".contact-form");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  Email.send({
    SecureToken: "52fa6ccc-37a4-4bcb-ba6e-443bd550d5a8",
    To: "boodykassem16@gmail.com",
    From: "boodykassem16@gmail.com",
    Subject: "How are you",
    Body: `Name: ${document.getElementById("name").value}
          Email: ${document.getElementById("email").value}
          Phone: ${document.getElementById("number").value}
          Message: ${document.getElementById("subject").value}`,
  }).then((message) => alert(message));
});

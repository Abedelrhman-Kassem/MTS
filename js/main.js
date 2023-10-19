const reciverMail = "Sales@masstech.com.eg";

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
let submitBtnForm = document.querySelector("#submit-btn");

submitBtnForm.addEventListener("click", (e) => {
  e.preventDefault();
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let phone = document.getElementById("number");
  let message = document.getElementById("message");

  if (validateName(name)) {
    if (validateEmail(email)) {
      if (validatePhone(phone)) {
        if (validateMessage(message)) {
          sendMail(name, email, phone, message);
        } else {
          document
            .querySelector(".message-required")
            .classList.remove("d-none");
        }
      } else {
        document.querySelector(".phone-required").classList.remove("d-none");
      }
    }
  }

  // Name Validate
  function validateName(name) {
    let requiredNameField = document.querySelector(".name-required");
    if (name.value.length == 0) {
      requiredNameField.classList.remove("d-none");
      return false;
    }
    requiredNameField.classList.add("d-none");
    return true;
  }

  // Email Validate
  function validateEmail(email) {
    let requiredEmailField = document.querySelector(".email-required");
    const reg = /^[a-z]\w+@\w+.\w+/i;

    if (reg.test(email.value) == false) {
      requiredEmailField.classList.remove("d-none");
      return false;
    }

    requiredEmailField.classList.add("d-none");
    return true;
  }

  // Phone Validate
  function validatePhone(phone) {
    let requiredPhoneField = document.querySelector(".phone-required");

    const reg = /(\(\+?(\d{1,4})\))?\s?(\d{1,14})/;

    if (reg.test(phone.value) == false) {
      requiredPhoneField.classList.remove("d-none");
      return false;
    }

    requiredPhoneField.classList.add("d-none");
    return true;
  }

  // Message Validate
  function validateMessage(message) {
    let requiredMessageField = document.querySelector(".message-required");

    if (message.value.length == 0) {
      requiredMessageField.classList.remove("d-none");
      return false;
    }
    requiredMessageField.classList.add("d-none");
    return true;
  }
});

function sendMail(name, email, phone, message) {
  (function () {
    emailjs.init("dkTedlkKw_k3jiTl_");
  })();

  let params = {
    sender: email.value,
    to: reciverMail,
    message: `Name: ${name.value}
              Phone: ${phone.value}
              Message: ${message.value}`,
  };

  let serviceId = "service_2drsewk";
  let templateId = "template_xjot4xl";

  emailjs
    .send(serviceId, templateId, params)
    .then((res) => alert("Your request has been sent to sales@masstech.com.eg"))
    .catch((error) => alert(error));
}

// `Name: ${document.getElementById("name").value}
//  Email: ${document.getElementById("email").value}
//  Phone: ${document.getElementById("number").value}
//  Message: ${document.getElementById("subject").value}`

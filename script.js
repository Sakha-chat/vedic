const expand_btn = document.querySelector(".expand-btn");

let activeIndex;

expand_btn.addEventListener("click", () => {
  document.body.classList.toggle("collapsed");
});

const current = window.location.href;

const allLinks = document.querySelectorAll(".sidebar-links a");

allLinks.forEach((elem) => {
  elem.addEventListener("click", function () {
    const hrefLinkClick = elem.href;

    allLinks.forEach((link) => {
      if (link.href == hrefLinkClick) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  });
});

const searchInput = document.querySelector(".search__wrapper input");

searchInput.addEventListener("focus", (e) => {
  document.body.classList.remove("collapsed");
});
$(document).ready(function () {
  console.log("Document ready");
  $(".expand-btn").click(function () {
    console.log("Expand button clicked");
    $(".sidebar-links").toggleClass("active");
  });
});
//Dark Mode-Light Mode
const body = document.querySelector('body');
const toggle = document.getElementById("toggle");
const icon = document.getElementById("icon");

toggle.onclick = function() {
  toggle.classList.toggle("active");
  body.classList.toggle("light-mode");
  if (body.classList.contains("light-mode")) {
    icon.src = "Assets/sun.png";
  } else {
    icon.src = "Assets/moon.png";
  }
}

function displayMessage() {
    const message = document.createElement("div");
    if (document.body.classList.contains("light-mode")) {
      message.textContent = "Switch to dark mode";
    } else {
      message.textContent = "Switch to light mode";
    }
    message.classList.add("hover-message");
    document.body.appendChild(message);
}
  
  
  function hideMessage() {
    const message = document.querySelector(".hover-message");
    if (message) {
      message.remove();
    }
  }

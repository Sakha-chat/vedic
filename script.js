document.addEventListener("DOMContentLoaded", function () {
  const allLinks = document.querySelectorAll(".sidebar-links a");
  
  allLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      allLinks.forEach((otherLink) => {
        otherLink.classList.remove("active");
      });
      link.classList.add("active");
    });
  });

  const searchInput = document.querySelector(".search__wrapper input");

  searchInput.addEventListener("focus", () => {
    document.body.classList.remove("collapsed");
  });

  const toggle = document.getElementById("toggle");
  const icon = document.getElementById("icon");

  toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    body.classList.toggle("light-mode");
    icon.src = body.classList.contains("light-mode") ? "Assets/sun.png" : "Assets/moon.png";
  });

  const body = document.querySelector('body');

  function displayMessage() {
    const message = document.createElement("div");
    message.textContent = body.classList.contains("light-mode") ? "Switch to dark mode" : "Switch to light mode";
    message.classList.add("hover-message");
    document.body.appendChild(message);
  }

  function hideMessage() {
    const message = document.querySelector(".hover-message");
    if (message) {
      message.remove();
    }
  }
});

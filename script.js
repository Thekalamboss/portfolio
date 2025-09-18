const form = document.getElementById("contactForm");

const whatsappNumber = "919554894283";

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill all fields!");
    return;
  }

  const text = `Hello! My name is ${name} (${email}).\n\nMessage: ${message}`;
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    text
  )}`;

  window.open(url, "_blank");
});

// hamburger

const navToggle = document.getElementById("navToggle");
const navList = document.getElementById("navList");

navToggle.addEventListener("click", () => {
  navList.classList.toggle("show");
});

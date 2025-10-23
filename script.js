// Smooth scrolling and active section highlight
const links = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");
const year = document.getElementById("year");

window.addEventListener("scroll", () => {
  let scrollPos = window.scrollY + 200;
  sections.forEach(sec => {
    if (scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {
      links.forEach(link => link.classList.remove("active"));
      document.querySelector(`.nav-link[href="#${sec.id}"]`).classList.add("active");
    }
  });
});

// Contact form
document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  document.getElementById("formMsg").textContent = "✅ Message sent successfully!";
});

document.getElementById("resetForm").addEventListener("click", () => {
  document.getElementById("contactForm").reset();
  document.getElementById("formMsg").textContent = "";
});

// Footer year
year.textContent = new Date().getFullYear();

/* ================= MOBILE MENU ================= */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

/* ================= CLOSE MENU ON CLICK ================= */

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

/* ================= SCROLL ANIMATIONS ================= */

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll(".domain-card, .project-card, .tech-item").forEach((el) => {
  el.classList.add("hidden");
  observer.observe(el);
});
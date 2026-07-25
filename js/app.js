"use strict";

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");
const navLinks = [...document.querySelectorAll(".nav-link")];
const sections = [...document.querySelectorAll("main section[id]")];

hamburger?.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("active");
  hamburger.setAttribute("aria-expanded", String(isOpen));
  hamburger.textContent = isOpen ? "×" : "☰";
});

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    hamburger?.setAttribute("aria-expanded", "false");
    if (hamburger) hamburger.textContent = "☰";
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    navLinks.forEach(link => {
      link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
    });
  });
}, { rootMargin: "-35% 0px -55% 0px", threshold: 0 });

sections.forEach(section => observer.observe(section));

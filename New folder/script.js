// ====================== SCROLL REVEAL (keep your existing code) ======================
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.08 },
);
reveals.forEach((r) => observer.observe(r));

// ====================== FIXED NAVIGATION ======================
const navLinks = document.querySelectorAll(".nav-link");

// 1. Click handler - attach ONLY ONCE
navLinks.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const targetId = btn.getAttribute("data-target");
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// 2. Active link on scroll (Scroll Spy)
window.addEventListener("scroll", () => {
  let current = "";

  // Check every section
  navLinks.forEach((link) => {
    const id = link.getAttribute("data-target");
    const section = document.getElementById(id);

    if (section) {
      const sectionTop = section.offsetTop;
      // Trigger a bit earlier (adjust -120 if your navbar is taller)
      if (window.scrollY >= sectionTop - 120) {
        current = id;
      }
    }
  });

  // Update active class
  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("data-target") === current) {
      link.classList.add("active");
    }
  });
});

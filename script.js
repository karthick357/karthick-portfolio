/* -------------------------------
   SMOOTH SCROLLING FOR NAV LINKS
--------------------------------*/
document.querySelectorAll("nav a, a[href^='#']").forEach(link => {
  link.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

/* -------------------------------
   ANIMATION (Framer-Motion style)
--------------------------------*/
function animateOnLoad() {
  const heroLeft = document.querySelector(".hero-left");
  const heroRight = document.querySelector(".hero-right");

  if (heroLeft) {
    heroLeft.style.opacity = "0";
    heroLeft.style.transform = "translateX(-30px)";
    setTimeout(() => {
      heroLeft.style.transition = "0.6s ease";
      heroLeft.style.opacity = "1";
      heroLeft.style.transform = "translateX(0)";
    }, 100);
  }

  if (heroRight) {
    heroRight.style.opacity = "0";
    heroRight.style.transform = "scale(0.95)";
    setTimeout(() => {
      heroRight.style.transition = "0.6s ease";
      heroRight.style.opacity = "1";
      heroRight.style.transform = "scale(1)";
    }, 200);
  }
}
window.addEventListener("load", animateOnLoad);

/* -------------------------------
   PROJECT CARD HOVER LIFT
--------------------------------*/
document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-6px)";
    card.style.transition = "0.3s ease";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
  });
});

/* -------------------------------
   SCROLL REVEAL SECTIONS
--------------------------------*/
const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll(".reveal").forEach(section => {
  section.style.opacity = "0";
  section.style.transform = "translateY(40px)";
  section.style.transition = "0.6s ease-out";
  revealObserver.observe(section);
});

/* -------------------------------
   CONTACT FORM VALIDATION
--------------------------------*/
const form = document.querySelector("#contact-form");

if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();

    const name = form.querySelector("#name").value.trim();
    const email = form.querySelector("#email").value.trim();
    const msg = form.querySelector("#message").value.trim();

    if (!name || !email || !msg) {
      alert("Please fill in all fields!");
      return;
    }

    if (!email.includes("@")) {
      alert("Enter a valid email!");
      return;
    }

    alert("Message sent successfully!");
    form.reset();
  });
}

/* -------------------------------
   DARK / LIGHT MODE TOGGLE
--------------------------------*/
const toggleBtn = document.querySelector("#theme-toggle");

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
  });
}

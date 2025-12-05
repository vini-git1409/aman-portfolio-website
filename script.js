// Typing Effect
const textSpan = document.querySelector(".highlight");
const textArray = ["Distributed Systems", "Cloud Platforms", "Backend Architectures", "Scalable Solutions"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentText = textArray[textIndex];
    
    if (isDeleting) {
        textSpan.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        textSpan.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(type, 2000); // Pause at end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % textArray.length;
        setTimeout(type, 500); // Pause before new word
    } else {
        setTimeout(type, isDeleting ? 100 : 150);
    }
}

document.addEventListener("DOMContentLoaded", type);

// Mobile Menu Toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("toggle");
});

// Scroll Reveal Animation (Simple version)
const sections = document.querySelectorAll(".section");

const revealObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.1 }
);

sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = "translateY(50px)";
    section.style.transition = "all 0.8s ease";
    revealObserver.observe(section);
});
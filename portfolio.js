// Mobile Navigation

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// Contact Form

const form = document.getElementById("contact-form");

form.addEventListener("submit", function(e) {

    e.preventDefault();

    alert("Thank you for your message! I'll get back to you soon.");

    form.reset();

});
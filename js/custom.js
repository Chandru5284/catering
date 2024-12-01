
// Chat functionality
const chatToggle = document.getElementById('chat-toggle');
const chatPopup = document.getElementById('chat-popup');

chatToggle.addEventListener('click', () => {
    chatPopup.classList.toggle('hidden');
});

// Close chat popup when clicking outside
document.addEventListener('click', (event) => {
    const isClickInsideChat = chatToggle.contains(event.target) || chatPopup.contains(event.target);
    if (!isClickInsideChat && !chatPopup.classList.contains('hidden')) {
        chatPopup.classList.add('hidden');
    }
});


const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


function setActiveMenuItem(clickedItem) {
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((link) => {
        link.classList.remove("active");
    });
    clickedItem.classList.add("active");
}

// Add click event listeners to menu items
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            setActiveMenuItem(this);
        });
    });
});

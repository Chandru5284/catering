
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



// document.addEventListener("DOMContentLoaded", function () {
//     const sections = document.querySelectorAll("section");
//     const navLinks = document.querySelectorAll(".nav-link");

//     // Function to update active menu
//     function updateActiveMenu() {
//         let currentSection = "";

//         // Loop through each section to find the one in view
//         sections.forEach((section) => {
//             const sectionTop = section.offsetTop - 70; // Adjust for navbar height
//             const sectionHeight = section.offsetHeight;

//             if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
//                 currentSection = section.getAttribute("id");
//             }
//         });

//         // Update active class for the navbar links
//         navLinks.forEach((link) => {
//             link.classList.remove("active");
//             if (link.getAttribute("href") === `#${currentSection}`) {
//                 link.classList.add("active");
//             }
//         });
//     }

//     // Add scroll listener
//     window.addEventListener("scroll", updateActiveMenu);
// });

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

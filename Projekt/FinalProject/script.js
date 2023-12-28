let navbar = document.querySelector('.header .navbar');
let contactInfo = document.querySelector('.contact-info');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
 };

document.querySelector('#info-btn').onclick = () =>{
    contactInfo.classList.add('active');
};


document.querySelector('#close-contact-info').onclick = () =>{
    contactInfo.classList.remove('active');
};


window.onscroll = () =>{
    navbar.classList.remove('active');
    contactInfo.classList.remove('active');
};

    // Contact Form

    document.addEventListener("DOMContentLoaded", function () {
        let confirmationMessage = document.getElementById("confirmationMessage");
        
        
            if (confirmationMessage) {
                document.getElementById("contactForm").addEventListener("submit", function (event) {
                    event.preventDefault();
        
        
                    confirmationMessage.innerText = "Message sent!";
        
        
                    setTimeout(function () {
                        confirmationMessage.innerText = "";
                        document.getElementById("contactForm").reset();
                    }, 3000);
                });
            } else {
                console.error("Element with ID 'confirmationMessage' not found!");
            }
        });


document.querySelectorAll('.navbar a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar
        
document.addEventListener('DOMContentLoaded', function () {
    function highlightActiveLink() {
        const navbarLinks = document.querySelectorAll('.navbar a');

        let lastSection = null;

        navbarLinks.forEach((link) => {
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                const rect = targetSection.getBoundingClientRect();
                const isInView = rect.top <= 50 && rect.bottom >= 50;

                if (isInView) {
                    lastSection = link;
                }
            }
        });

        const currentPage = window.location.pathname;

        navbarLinks.forEach((link) => {
            link.classList.remove('active');
        });

        if (currentPage.includes('contact.html')) {
            navbarLinks.forEach((link) => {
                const targetId = link.getAttribute('href').substring(1);
                if (targetId === 'contact') {
                    link.classList.add('active');
                }
            });
        } else if (currentPage.includes('about.html')) {
            navbarLinks.forEach((link) => {
                const targetId = link.getAttribute('href').substring(1);
                if (targetId === 'about') {
                    link.classList.add('active');
                }
            });
        } else if (lastSection) {
            lastSection.classList.add('active');
        }
    }

    window.addEventListener('scroll', highlightActiveLink);
    highlightActiveLink();
});







              
        
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
    

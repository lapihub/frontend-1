document.querySelector('#menu-btn').onclick = () => {
    console.log('Button clicked!');
    navbar.classList.toggle('active');
    console.log('Navbar class toggled:', navbar.classList.contains('active'));
};

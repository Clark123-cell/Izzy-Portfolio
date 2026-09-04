const typing = new Typed('.typing', {
    strings: ['Web Designer', 'UI/UX Enthusiast', 'Aspiring Frontend Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
});

const navbar = document.querySelector('nav');

window.addEventListener('scroll', function() {

    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

});

const revealElements = document.querySelectorAll('.reveal');

window.addEventListener('scroll', function() {

    revealElements.forEach(function(element) {

        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
            element.classList.add('show');
        }

    });

});
window.dispatchEvent(new Event('scroll'));

const contactForm = document.querySelector('.contact-form');
const sendButton = document.querySelector('#send-button');
const formStatus = document.querySelector('.form-status');

contactForm.addEventListener('submit', async function(event) {

    event.preventDefault();

    sendButton.textContent = 'Sending...';

    const formData = new FormData(contactForm);

    const response = await fetch(contactForm.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    });

   if (response.ok) {
    sendButton.textContent = 'SENT ✓';
    formStatus.textContent = '✓ Message sent successfully.';
    contactForm.reset();

    setTimeout(function() {
        sendButton.textContent = 'Send Message →';
        formStatus.textContent = '';
    }, 3000);
}
else {
    sendButton.textContent = 'Try Again';
    formStatus.textContent = '✕ Something went wrong. Please try again.';
}
});


const dashboardLinks = document.querySelectorAll('.dashboard-link');
const dashboardSections = document.querySelectorAll('.dashboard-section');

dashboardLinks.forEach(function(link) {

    link.addEventListener('click', function(event) {

        event.preventDefault();

        const targetId = link.getAttribute('href');

        dashboardSections.forEach(function(section) {
            section.classList.remove('active-section');
        });

        document.querySelector(targetId).classList.add('active-section');

    });

});

dashboardLinks.forEach(function(link) {

    link.addEventListener('click', function() {

        dashboardLinks.forEach(function(item) {
            item.classList.remove('active-link');
        });

        link.classList.add('active-link');

    });

});

document.querySelector('a[href="#home"]').classList.add('active-link');
window.addEventListener('load', function() {
    const loadingScreen = document.querySelector('.loading-screen');

    setTimeout(function() {
        loadingScreen.style.opacity = '0';

        setTimeout(function() {
            loadingScreen.style.display = 'none';
        }, 500);

    }, 1500);
});
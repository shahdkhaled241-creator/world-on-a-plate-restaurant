document.addEventListener('DOMContentLoaded', function() {
    // 1. Display Current Date on Home Page
    const dateElement = document.getElementById('currentDate');
    if (dateElement) {
        dateElement.textContent = new Date().toLocaleDateString('en-US', {
            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
        });
    }

    // 2. Menu Selection Alerts
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            const name = item.querySelector('h3').textContent;
            alert('Selection Saved: ' + name);
        });
    });

    // 3. Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Stop page reload
            const name = document.getElementById('name').value;
            alert('Thank you, ' + name + '! Your message was sent successfully.');
            contactForm.reset();
        });
    }
});
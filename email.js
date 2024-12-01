// Initialize EmailJS
(function () {
    emailjs.init('FhDbQeowhS4uzxsda'); // Replace 'YOUR_USER_ID' with your EmailJS user ID
})();

// Form validation and submission
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Validate the form
    if (!this.checkValidity()) {
        this.classList.add('was-validated');
        return;
    }

    // Collect form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
    };

    // Send email using EmailJS
    emailjs.send('service_u8l5blm', 'template_ogxtmxa', formData)
        .then(() => {
            document.getElementById('statusMessage').innerHTML =
                '<div class="alert alert-success">Message sent successfully!</div>';
            document.getElementById('contactForm').reset();
        })
        .catch((error) => {
            console.error('Failed to send message:', error);
            document.getElementById('statusMessage').innerHTML =
                '<div class="alert alert-danger">Failed to send the message. Please try again later.</div>';
        });
});
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    form.addEventListener('submit', event => {
        event.preventDefault();

        const usernameInput = document.getElementById('username').value.trim();
        const emailInput = document.getElementById('email').value.trim();
        const passwordInput = document.getElementById('password').value.trim();

        let isValid = true;
        let messages = [];

        // Username validation
        if (usernameInput.length < 3) {
            messages.push('Username should be more than 3 words.');
            isValid = false;
        }
        if (!isValid) return;

        // Email Validation
        if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(emailInput)) {
            messages.push('Please enter a valid email address');
            isValid = false;
        }
        if (!isValid) return;

        // Password Validation
        if (passwordInput.length < 8) {
            messages.push('Password should be more than eight characters');
            isValid = false;
        }
        if (!isValid) return

        // Displaying Feedback
        feedbackDiv.style.display = "block";

        if (isValid) {
            feedbackDiv.textContent = 'Registration successful';
            feedbackDiv.style.color = "#28a745";
        } else {
            feedbackDiv.innerHTML = messages.join("<br>");
            feedbackDiv.style.color = "#dc3545";
        }

    })


})
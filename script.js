document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    form.addEventListener('submit', event => {
        event.preventDefault();

        const usernameInput = document.getElementById('username');
        const emailInput = document.getElementById('email').value.trim();
        const passwordInput = document.getElementById('password');

        let isValid = true;
        let messages = [];

        // Username validation
        const username = document.getElementById('username').value.trim();
        if (username.length < 3) {
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
        const password = document.getElementById('password').value.trim();
        if (password.length < 8) {
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
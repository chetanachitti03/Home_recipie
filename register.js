document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        let valid = true;
        
        const username = document.getElementById('username');
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        const confirmPassword = document.getElementById('confirmPassword');
        
        // Clear previous errors
        document.getElementById('usernameError').textContent = '';
        document.getElementById('emailError').textContent = '';
        document.getElementById('passwordError').textContent = '';
        document.getElementById('confirmPasswordError').textContent = '';
        
        // Username validation
        if (username.value.trim() === '') {
            document.getElementById('usernameError').textContent = 'Username is required';
            valid = false;
        }
        
        // Email validation
        if (email.value.trim() === '') {
            document.getElementById('emailError').textContent = 'Email is required';
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(email.value)) {
            document.getElementById('emailError').textContent = 'Email is invalid';
            valid = false;
        }
        
        // Password validation
        if (password.value.trim() === '') {
            document.getElementById('passwordError').textContent = 'Password is required';
            valid = false;
        }
        
        // Confirm password validation
        if (confirmPassword.value !== password.value) {
            document.getElementById('confirmPasswordError').textContent = 'Passwords do not match';
            valid = false;
        }
        
        if (valid) {
            alert('Registration successful!');
            window.location.href = 'login.html';
        }
    });
});

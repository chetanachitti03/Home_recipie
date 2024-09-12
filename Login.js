document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        
        // Clear previous errors
        document.getElementById('emailError').textContent = '';
        document.getElementById('passwordError').textContent = '';
        
        let valid = true;
        
        // Email validation
        if (email.value.trim() === '') {
            document.getElementById('emailError').textContent = 'Email is required';
            valid = false;
        }
        
        // Password validation
        if (password.value.trim() === '') {
            document.getElementById('passwordError').textContent = 'Password is required';
            valid = false;
        }
        
        if (valid) {
            alert('Login successful!');
            // Redirect or handle login logic here
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('errorMessage');
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');

    // Toggle password visibility
    togglePassword.addEventListener('click', () => {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        togglePassword.classList.toggle('fa-eye');
        togglePassword.classList.toggle('fa-eye-slash');
    });

    // Form submission
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = passwordInput.value;
        
        // Basic validation
        if (!isValidEmail(email)) {
            showError('Please enter a valid email address');
            return;
        }

        if (password.length < 6) {
            showError('Password must be at least 6 characters long');
            return;
        }

        // Here you would typically make an API call to your backend
        // For demo purposes, we'll simulate a successful login
        simulateLogin(email, password);
    });

    // Email validation
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Show error message
    function showError(message) {
        errorMessage.textContent = message;
        errorMessage.style.opacity = '1';
        setTimeout(() => {
            errorMessage.style.opacity = '0';
        }, 3000);
    }

    // Simulate login (replace with actual API call)
    function simulateLogin(email, password) {
        const loginBtn = document.querySelector('.login-btn');
        loginBtn.textContent = 'Logging in...';
        loginBtn.disabled = true;

        setTimeout(() => {
            // Simulate successful login
            console.log('Logged in with:', { email, password });
            showError('Login successful!');
            loginBtn.textContent = 'Login';
            loginBtn.disabled = false;
            
            // Here you would typically:
            // 1. Store the authentication token
            // 2. Redirect to dashboard/home page
            // window.location.href = '/dashboard';
        }, 1500);
    }
});

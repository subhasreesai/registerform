const form = document.getElementById('registration-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const phone = document.getElementById('phone').value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    let isValid = true;
    if (name === '') {
        document.getElementById('name-error').innerText = 'Name is required';
        isValid = false;
    } else {
        document.getElementById('name-error').innerText = '';
    }

    if (phone === '') {
        document.getElementById('phone-error').innerText = 'Phone number is required';
        isValid = false;
    } else if (phone.length < 10) {
        document.getElementById('phone-error').innerText = 'Phone number must be at least 10 digits';
        isValid = false;
    } else {
        document.getElementById('phone-error').innerText = '';
    }

    // Password error handling
    if (password === '') {
        document.getElementById('password-error').innerText = 'Password is required';
        isValid = false;
    } else if (password.length < 8) {
        document.getElementById('password-error').innerText = 'Password must be at least 8 characters';
        isValid = false;
    } else {
        document.getElementById('password-error').innerText = '';
    }
 // Confirm password error handling
 if (confirmPassword === '') {
    document.getElementById('confirm-password-error').innerText = 'Confirm password is required';
    isValid = false;
} else if (confirmPassword !== password) {
    document.getElementById('confirm-password-error').innerText = 'Passwords do not match';
    isValid = false;
} else {
    document.getElementById('confirm-password-error').innerText = '';
}
if (email === '') {
    document.getElementById('email-error').innerText = 'Email is required';
    isValid = false;
} else if (!emailRegex.test(email)) {
    document.getElementById('email-error').innerText = 'Invalid email format';
    isValid = false;
} else {
    document.getElementById('email-error').innerText = '';
}

if (isValid) {
    // Form is valid, submit it
    console.log('Form submitted');
    window.location.href="home.html"
}
});

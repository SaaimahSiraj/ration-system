// register.js
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-auth.js";
import { auth } from '../../public/firebase-config.js';

document.getElementById('registerForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Registration successful
      alert('Registration successful!');
      console.log('User Registered:', userCredential.user);
      window.location.href = "login.html"; // Redirect to login page after successful registration
    })
    .catch((error) => {
      console.error('Error during registration:', error.message);
      alert('Registration failed: ' + error.message);
    });
});

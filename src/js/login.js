// login.js
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-auth.js";
import { auth } from '../../public/firebase-config.js';

document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Login successful
      alert('Login successful!');
      console.log('User Logged In:', userCredential.user);
      window.location.href = "dashboard.html"; // Redirect to dashboard after login
    })
    .catch((error) => {
      console.error('Error during login:', error.message);
      alert('Login failed: ' + error.message);
    });
});

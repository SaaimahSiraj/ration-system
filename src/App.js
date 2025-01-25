import React, { useState } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase-config';  // Import Firebase auth instance
import GrainFlow from './js/GrainFlow';
import RationInventory from './js/RationInventory';
import CustomerQueries from './js/CustomerQueries';
import RationCard from './js/RationCard';
import Verification from './js/Verification';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  // Function to handle user registration
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setMessage(`User registered successfully: ${userCredential.user.email}`);
    } catch (error) {
      setMessage(`Registration failed: ${error.message}`);
    }
  };

  // Function to handle user login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setMessage(`User logged in successfully: ${userCredential.user.email}`);
    } catch (error) {
      setMessage(`Login failed: ${error.message}`);
    }
  };

  return (
    <div className="App">
      <h2>Register or Login</h2>

      {/* Registration Form */}
      <form onSubmit={handleRegister}>
        <h3>Register</h3>
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <button type="submit">Register</button>
      </form>

      {/* Login Form */}
      <form onSubmit={handleLogin}>
        <h3>Login</h3>
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <button type="submit">Login</button>
      </form>

      {/* Feedback Message */}
      {message && <p>{message}</p>}

      <Router>
  <Routes>
    <Route path="/customer-queries" element={<CustomerQueries />} />
    <Route path="/grain-flow" element={<GrainFlow />} />
    <Route path="/ration-card" element={<RationCard />} />
    <Route path="/ration-inventory" element={<RationInventory />} />
    <Route path="/verification" element={<Verification />} />
  </Routes>
</Router>

    </div>
  );
}

export default App;

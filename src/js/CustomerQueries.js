import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase-config';


function CustomerQueries() {
  const [query, setQuery] = useState('');
  const [message, setMessage] = useState('');

  const handleQuerySubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'queries'), {
        query,
        timestamp: new Date(),
      });
      setMessage('Query submitted successfully');
    } catch (error) {
      setMessage('Error submitting query: ' + error.message);
    }
  };

  return (
    <div>
      <h3>Customer Queries</h3>
      <form onSubmit={handleQuerySubmit}>
        <textarea value={query} onChange={(e) => setQuery(e.target.value)} required></textarea>
        <button type="submit">Submit Query</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default CustomerQueries;

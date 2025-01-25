import React, { useState } from 'react';
import { doc, updateDoc, getDoc } from 'firebase/firestore';
import { db } from '../firebase-config';
  // Adjust path

function GrainFlow() {
  const [grainGiven, setGrainGiven] = useState('');
  const [totalGrains, setTotalGrains] = useState(100);  // Default total grains
  const [message, setMessage] = useState('');

  const handleGrainFlow = async (e) => {
    e.preventDefault();

    try {
      const updatedGrains = totalGrains - grainGiven;
      const grainDocRef = doc(db, 'rationInventory', 'total');  // Adjust doc path
      await updateDoc(grainDocRef, {
        totalGrains: updatedGrains,
      });

      setTotalGrains(updatedGrains);
      setMessage(`Grain distributed: ${grainGiven}. Remaining: ${updatedGrains}.`);
    } catch (error) {
      setMessage('Error in grain flow: ' + error.message);
    }
  };

  return (
    <div>
      <h3>Grain Distribution</h3>
      <form onSubmit={handleGrainFlow}>
        <label>Amount of Grain Given (in kg):</label>
        <input type="number" value={grainGiven} onChange={(e) => setGrainGiven(e.target.value)} required />
        <button type="submit">Update Grain Flow</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default GrainFlow;

import React, { useState, useEffect } from 'react';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import {  db } from '../firebase-config';


function RationCard() {
  const [rationCard, setRationCard] = useState({});
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchRationCard = async () => {
      const cardDocRef = doc(db, 'rationCards', 'user123');  // Use actual user ID
      const cardSnap = await getDoc(cardDocRef);
      if (cardSnap.exists()) {
        setRationCard(cardSnap.data());
      }
    };

    fetchRationCard();
  }, []);

  const handleUpdate = async () => {
    const cardDocRef = doc(db, 'rationCards', 'user123');  // Use actual user ID
    await updateDoc(cardDocRef, { ...rationCard });
    setMessage('Ration card updated successfully');
  };

  return (
    <div>
      <h3>Ration Card</h3>
      <p>Card Number: {rationCard.cardNumber}</p>
      <button onClick={handleUpdate}>Update Ration Card</button>
      <p>{message}</p>
    </div>
  );
}

export default RationCard;

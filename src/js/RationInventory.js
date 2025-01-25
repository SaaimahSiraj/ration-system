import React, { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import {  db } from '../firebase-config';


function RationInventory() {
  const [totalGrains, setTotalGrains] = useState(0);

  useEffect(() => {
    const fetchGrains = async () => {
      const grainDocRef = doc(db, 'rationInventory', 'total');
      const grainDocSnap = await getDoc(grainDocRef);
      if (grainDocSnap.exists()) {
        setTotalGrains(grainDocSnap.data().totalGrains);
      }
    };

    fetchGrains();
  }, []);

  return (
    <div>
      <h3>Ration Inventory</h3>
      <p>Total Grains Available: {totalGrains} kg</p>
    </div>
  );
}

export default RationInventory;

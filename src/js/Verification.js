import React, { useState } from 'react';
import { signInWithPhoneNumber } from 'firebase/auth';
import { auth} from '../firebase-config';


function Verification() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [code, setCode] = useState('');
  const [verificationId, setVerificationId] = useState('');

  const sendOtp = async () => {
    const appVerifier = window.recaptchaVerifier;
    const verification = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
    setVerificationId(verification.verificationId);
  };

  const verifyCode = async () => {
    // Code for OTP verification
  };

  return (
    <div>
      <h3>Verification</h3>
      <input type="text" placeholder="Phone Number" onChange={(e) => setPhoneNumber(e.target.value)} />
      <button onClick={sendOtp}>Send OTP</button>
      <input type="text" placeholder="Enter OTP" onChange={(e) => setCode(e.target.value)} />
      <button onClick={verifyCode}>Verify OTP</button>
    </div>
  );
}

export default Verification;

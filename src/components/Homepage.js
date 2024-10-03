// src/components/Homepage.js
import React from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Homepage() {
  const auth = getAuth();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Redirect to login page after sign out
        navigate('/login');
      })
      .catch((error) => {
        console.error("Error signing out: ", error);
      });
  };

  return (
    <div>
      <h1>Welcome to the Homepage!</h1>
      <p>This is the landing page after a successful login.</p>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
}

export default Homepage;
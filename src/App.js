// src/App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';  
import Login from './components/login';
import Register from './components/register';
import Homepage from './components/Homepage';
import ProtectedRoute from './components/ProtectedRoute';  

function App() {
  const auth = getAuth();

  useEffect(() => {
    signOut(auth);  
  }, [auth]);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route 
          path="/" 
          element={
            <ProtectedRoute>
              <Homepage />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;

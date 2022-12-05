import React from 'react';
import {Routes, Route } from "react-router-dom";
import Login from './components/login/Login.jsx';
import SignUp from './components/login/SignUp.jsx';
import Home from './components/user/Home.jsx';

 function App() {
  return (
   
    <div>
      <Routes>
        <Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </div>
    
  );
}

export default App;

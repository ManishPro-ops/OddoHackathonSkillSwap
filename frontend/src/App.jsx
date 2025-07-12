import React from 'react';
// import Login from './pages/Login';
import { Routes, Route } from 'react-router-dom';
import ProfilePage from './pages/ProfilePage';
import ProfileEdit from './pages/ProfileEdit';

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProfilePage />} />
      <Route path="/edit" element={<ProfileEdit />} />
    </Routes>
    // <>
    // </>
  );
}

// import React from "react";
// import HomePage from "./pages/HomePage";
// import { Route, Routes } from "react-router-dom";

// function App() {
//   return(
//     <Routes>
//       <Route path="/" element={<HomePage />}/>
//    </Routes>
// )}
 
export default App;

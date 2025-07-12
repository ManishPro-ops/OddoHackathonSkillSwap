import React from "react";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  return(
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/login" element={<LoginPage />}/>
      <Route path="/signup" element={<SignUp />}/>

   </Routes>
)}
 
export default App;

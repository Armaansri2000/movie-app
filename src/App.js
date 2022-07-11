import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// my-stuff
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Main from "./components/Main";

const App = () => {
	const [loggedIn, setLoggedIn] = useState('false');
	useEffect(()=>{
		setLoggedIn(localStorage.getItem('loggedIn'))
	},[])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={loggedIn === 'true' ?<Main/>: <Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

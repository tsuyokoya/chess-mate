import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ChessMateApi from "../api";

import Home from "./Home";
import Room from "./Room";
import Login from "./Login";
import Signup from "./Signup";
import Navbar from "./Navbar";

const App = () => {
  const [currentUser, setCurrentUser] = useState(
    localStorage.getItem("username") || null
  );

  const login = async (username, password) => {
    try {
      const res = await ChessMateApi.login(username, password);
      if (res.failed) {
        throw Error("Invalid username/password");
      }
      setCurrentUser(username);
      localStorage.setItem("username", username);
      return res;
    } catch (err) {
      console.log(err);
      alert("Invalid username/password");
    }
  };

  const signup = async (username, password) => {
    try {
      const res = await ChessMateApi.signup(username, password);
      if (res.failed) {
        throw Error("Username already taken. Please enter another username.");
      }
      setCurrentUser(username);
      localStorage.setItem("username", username);
      return res;
    } catch (err) {
      console.log(err);
      alert("Username already taken. Please enter another username.");
    }
  };

  const logout = async () => {
    setCurrentUser(null);
    localStorage.removeItem("username");
  };

  return (
    <div className="bg-black h-screen text-white">
      <BrowserRouter>
        <Navbar logout={logout} currentUser={currentUser} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/room" element={<Room />} />
          <Route path="/login" element={<Login login={login} />} />
          <Route path="/logout" element={<Navigate to="/" replace />} />
          <Route path="/signup" element={<Signup signup={signup} />} />
          <Route path="*" element={<Navigate to="/" replace />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

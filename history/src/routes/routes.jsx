// src/routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import About from '../pages/about';
import Services from '../pages/services';
import Dashboard from '../components/dhashboard';
import Profile from '../pages/profile';
import Header from '../layout/header';
import Footer from '../layout/footer';
import Login from '../auth/login';
import Register from '../auth/register';

 const Pathrouter = () => {
  return (
    <Router>
        <div>
      <Header />
      </div>
      <main>
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default Pathrouter;

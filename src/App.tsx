import './App.css'
import React from 'react';
import Navbar from './componnents/Navbar/Navbar';
import Qoute from './componnents/Qoute/Qoute';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Products from './pages/Products/Products';
import Contact from './pages/Contact/Contact';
import GreenGold from './pages/GreenGold/GreenGold';
import Ogaro from './pages/Ogaro/Ogaro';
import Malika from './pages/Malika/Malika';
import Avie from './pages/Avie/Avie';
import SectionEndPage from './componnents/SectionEndPage/SectionEndPage';
import Certifications from './componnents/Certifications/Certifications';







function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />}>
          <Route index element={<GreenGold />} />
          <Route path="/products/greengold" element={<GreenGold />} />
          <Route path="/products/ogaro" element={<Ogaro />} />
          <Route path="/products/malika" element={<Malika />} />
          <Route path="/products/avie" element={<Avie />} />
        </Route>

        <Route path="/contact" element={<Contact />} />
        <Route path="/certifications" element={<Certifications />} />
      </Routes>
        <Qoute />

      <SectionEndPage />

    </>
  )
}

export default App

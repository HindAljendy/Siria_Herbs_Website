import './App.css'
import React from 'react';
import Product_Section from './componnents/Product_section/Product_Section'
import Navbar from './componnents/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Products from './pages/Products/Products';
import Contact from './pages/Contact/Contact';
import GreenGold from './pages/GreenGold/GreenGold';
import Ogaro from './pages/Ogaro/Ogaro';
import Malika from './pages/Malika/Malika';
import Avie from './pages/Avie/Avie';
import NewsLetterForm from './componnents/News Letter Form/NewsLetterForm';
import Store from './componnents/Store/History-Story';




function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/products" element={<Products/>}>
        <Route index element={<GreenGold />} />
        <Route path="/products/greengold" element={<GreenGold />} />
        <Route path="/products/ogaro" element={<Ogaro />} />
        <Route path="/products/malika" element={<Malika />} />
        <Route path="/products/avie" element={<Avie />} />
      </Route>
      
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    
    <NewsLetterForm/>
     <Product_Section/>

     <Store />




    </>
  )
}

export default App

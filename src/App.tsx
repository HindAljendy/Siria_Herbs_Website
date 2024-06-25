
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import NewsForm from './componnents/News Letter Form/NewsLetterForm'
import React from 'react';
import Footer from './componnents/Footer/Footer';
import CustomNavbar from './componnents/Navbar/Navbar'
import Navbar from './componnents/Navbar/Navbar'


function App() {


  return (
    <>

      <h1>Siria Herbs Website</h1>

      <NewsForm/>
      <Footer />

    <BrowserRouter>
       <CustomNavbar/>
    </BrowserRouter>


    </>
  )
}

export default App

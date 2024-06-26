
import { BrowserRouter } from 'react-router-dom'
import './App.css'


import Contact from './pages/Contact/Contact';


import NewsForm from './componnents/News Letter Form/NewsLetterForm'

import React from 'react';
import Footer from './componnents/Footer/Footer';
import CustomNavbar from './componnents/Navbar/Navbar'
import Navbar from './componnents/Navbar/Navbar'
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';


function App() {


  return (
    <>
    <PrivacyPolicy/>

      {/* <Contact/>

      <h1>Siria Herbs Website</h1>

      <NewsForm/>
      <Footer />

    <BrowserRouter>
       <CustomNavbar/>
    </BrowserRouter> */}


    </>
  )
}

export default App


import { BrowserRouter } from 'react-router-dom'
import './App.css'
import CustomNavbar from './componnents/Navbar/Navbar'
import Product_Section from './componnents/Product_section/Product_Section'
// import Navbar from './componnents/Navbar/Navbar'

function App() {


  return (
    <>
    <BrowserRouter>
       <CustomNavbar/>
    </BrowserRouter>
     <Product_Section/>
    </>
  )
}

export default App

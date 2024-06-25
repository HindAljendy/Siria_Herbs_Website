
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import CustomNavbar from './componnents/Navbar/Navbar'
// import Navbar from './componnents/Navbar/Navbar'

function App() {


  return (
    <>
    <BrowserRouter>
       <CustomNavbar/>
    </BrowserRouter>
     
    </>
  )
}

export default App

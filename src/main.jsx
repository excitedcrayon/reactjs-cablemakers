import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/common/Header.jsx';
import Footer from './components/common/Footer.jsx';
import FourOFour from './components/FourOFour.jsx';
import Home from './components/Home.jsx';
import Products from './components/Products.jsx';
import Services from './components/Services.jsx';
import Projects from './components/Projects.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import './index.css';
import './css/constants.css';
import './css/header.css';
import './css/content.css';
import './css/footer.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='*' element={<FourOFour />}/>
        <Route path='/' element={<Home />}/>
        <Route path='/products' element={<Products />}/>
        <Route path='/services' element={<Services />}/>
        <Route path='/projects' element={<Projects />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
)

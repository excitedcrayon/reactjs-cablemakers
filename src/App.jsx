import { Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './components/Home';
import Products from './components/Products';
import Services from './components/Services';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import FourOFour from './components/FourOFour';
import PrivacyPolicy from './components/PrivacyPolicy';
import SiteDisclaimer from './components/SiteDisclaimer';
import TermsAndConditions from './components/TermsAndConditions';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='*' element={<FourOFour />} />
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/services' element={<Services />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/contact-us' element={<Contact />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/site-disclaimer' element={<SiteDisclaimer />} />
        <Route path='/terms-and-conditions' element={<TermsAndConditions />} />
      </Routes>
      <Footer />
    </>
  )
};

export default App;

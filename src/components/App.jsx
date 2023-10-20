import { Routes, Route, useLocation} from 'react-router-dom';
import Header from "./common/Header";
import Footer from "./common/Footer";
import ProductDescription from './common/ProductDescription.jsx';
import About from './About';
import Contact from './Contact.jsx';
import FourOFour from './FourOFour.jsx';
import Home from './Home.jsx';
import PrivacyPolicy from './PrivacyPolicy.jsx';
import Products from './Products.jsx';
import Projects from './Projects.jsx';
import Services from './Services.jsx';
import SiteDisclaimer from './SiteDisclaimer.jsx';
import TermsAndConditions from './TermsAndConditions.jsx';
import { AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';

const App = () => {

  const location = useLocation();
  const helmetContext = {};

  return (
    <>
      <HelmetProvider context={helmetContext}>
        <Header />
        <AnimatePresence mode='wait' onExitComplete={true}>
          <Routes key={location.path} location={location}>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path='*' element={<FourOFour />}/>
            <Route path='/privacy-policy' element={<PrivacyPolicy />}/>
            <Route path='/products/:link' element={<ProductDescription />}/>
            <Route path='/products' element={<Products />}/>
            <Route path='/projects' element={<Projects />}/>
            <Route path='/services' element={<Services />}/>
            <Route path='/site-disclaimer' element={<SiteDisclaimer />}/>
            <Route path='/terms-and-conditions' element={<TermsAndConditions />}/>
          </Routes>
        </AnimatePresence>
        <Footer />
      </HelmetProvider>
    </>
  );
}

export default App;
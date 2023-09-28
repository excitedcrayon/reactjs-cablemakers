import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./common/Header";
import Footer from "./common/Footer";
import About from './About';
import Contact from './Contact.jsx';
import FourOFour from './FourOFour.jsx';
import Home from './Home.jsx';
import PrivacyPolicy from './PrivacyPolicy.jsx';
import ProductDescription from './ProductDescription.jsx';
import Products from './Products.jsx';
import Projects from './Projects.jsx';
import Services from './Services.jsx';
import SiteDisclaimer from './SiteDisclaimer.jsx';
import TermsAndConditions from './TermsAndConditions.jsx';

const App = () => {
    return (
        <BrowserRouter>
            <Header />
                <Routes>
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
            <Footer />
      </BrowserRouter>
    );
}

export default App;
import { Link } from "react-router-dom";
import FooterProductLink from "./FooterProductLink";
import products from "../../assets/file/products.json";

const Footer = () => {
    return (
        <footer>
            <section className="top-footer">
                <div className="footer-content">
                    <div className="footer-about">
                        <h3>About Cablemakers</h3>
                        <article>
                            <p>Cablemakers is an Australian independently   owned bulk cable management and distribution  business. We have strategically positioned   distribution centres that provide reliable,   comprehensive cabling solutions on time and on    budget. We service every market including  resources, industrial, commercial, government,   power distribution and residential.</p>
                        </article>
                    </div>
                    <div className="footer-products">
                        <h3>Products</h3>
                        <div className="footer-product-links">
                            { products.map((product) => (
                                <FooterProductLink key={product.id} product={product}/>
                            ))}
                        </div>
                    </div>
                    <div className="footer-other-links">
                        <h3>Other Links</h3>
                        <article>
                            <div className="footer-links">
                            <Link to="/privacy-policy" title="Privacy Policy" aria-label="Privacy Policy Link">Privacy Policy</Link>
                            <Link to="/site-disclaimer" title="Site Disclaimer" aria-label="Site Disclaimer Link">Site Disclaimer</Link>
                            <Link to="/terms-and-conditions" title="Terms and Conditions" aria-label="Terms and Conditions Link">Terms And Conditions</Link>                            
                            </div>
                        </article>
                    </div>
                </div>
            </section>
            <section className="bottom-footer">
                <div className="footer-content">
                    <div className="footer-socials">
                        <div className="footer-social-icon">
                            <Link to="https://www.facebook.com/people/Cablemakers/100054303139140/" id="facebook" className="social-icon" title="Cablemakers Facebook" aria-label="Link to the Cablemakers Facebook Page" target="_blank">                    
                        </Link>
                        </div>
                        <div className="footer-social-icon">
                            <Link to="https://au.linkedin.com/company/cablemakers" id="linkedin" className="social-icon" title="Cablemakers Linkedin" aria-label="Link to the Cablemakers Linkedin Page" target="_blank"></Link>
                        </div>
                    </div>
                    <div className="footer-copyright">&copy; Cablemakers 2023</div>
                </div>
            </section>
        </footer>
    );
};

export default Footer;
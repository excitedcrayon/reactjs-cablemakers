import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div className="footer-copyright">&copy; Cablemakers 2023</div>
            <div className="footer-links">
                <Link to="/privacy-policy" title="Privacy Policy">Privacy Policy</Link>
                <Link to="/site-disclaimer" title="Site Disclaimer">Site Disclaimer</Link>
                <Link to="/terms-and-conditions" title="Terms and Conditions">Terms And Conditions</Link>
            </div>
        </footer>
    );
};

export default Footer;
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className="header-content">
                <div className="logo">
                    <Link to="/"><span>Cablemakers</span></Link>
                </div>
                <div className="navigation">
                    <nav>
                        <ul>
                            <li><Link to="/" title='Home'>Home</Link></li>
                            <li><Link to="products" title='Products'>Products</Link></li>
                            <li><Link to="/services" title='Services'>Services</Link></li>
                            <li><Link to="/projects" title='Projects'>Projects</Link></li>
                            <li><Link to="/about-us" title='About'>About</Link></li>
                            <li><Link to="/contact-us" title='Contact'>Contact</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
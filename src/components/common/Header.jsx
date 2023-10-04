import { NavLink, useLocation } from "react-router-dom";
import Breadcrumb from "../common/Breadcrumb";

const Header = () => {

    const location = useLocation();
    const urls = location.pathname.split("/");

    return (
        <>
        <header>
            <div className="header-content">
                <div className="header-logo">
                    <div id="logo">
                        <span className="logo-cable">Cable</span>
                        <span className="logo-makers">Makers</span>
                    </div>
                </div>
                <nav>
                    <ul>
                        <li className="header-nav-link"><NavLink to='/' className={({ isActive }) => (isActive ? 'active-link' : '')} title="Home" aria-label="Home Navigation Link">Home</NavLink></li>
                        <li className="header-nav-link"><NavLink to='/products' className={({ isActive }) => (isActive ? 'active-link' : '')} title="Products" aria-label="Products Navigation Link">Products</NavLink></li>
                        <li className="header-nav-link"><NavLink to='/services' className={({ isActive }) => (isActive ? 'active-link' : '')} title="Services" aria-label="Services Navigation Link">Services</NavLink></li>
                        <li className="header-nav-link"><NavLink to='/projects' className={({ isActive }) => (isActive ? 'active-link' : '')} title="Projects" aria-label="Projects Navigation Link">Projects</NavLink></li>
                        <li className="header-nav-link"><NavLink to='/about' className={({ isActive }) => (isActive ? 'active-link' : '')} title="About" aria-label="About Navigation Link">About</NavLink></li>
                        <li className="header-nav-link"><NavLink to='/contact' className={({ isActive }) => (isActive ? 'active-link' : '')} title="Contact" aria-label="Contact Navigation Link">Contact</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
        <div className="breadcrumb">
            <nav>
                { urls.map((url, index) => {
                    return(
                        <Breadcrumb key={index} url={url} index={index}/>
                    )
                })}
            </nav>
        </div>
        </>
    );
};

export default Header;
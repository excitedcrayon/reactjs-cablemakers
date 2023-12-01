import { NavLink} from "react-router-dom";
import Breadcrumb from "../common/Breadcrumb";
import { useEffect, useState } from "react";
import cablemakerslogo from "/public/cablemakers-logo.png";

const Header = () => {

    const [activeMenuIcon, setActiveMenuIcon] = useState(false);
    const toggleMenuIcon = () => {
        setActiveMenuIcon(current => !current);
    }

    useEffect(() => {
        if(activeMenuIcon){
            document.body.classList.add('halt-body');
        }else{
            document.body.classList.remove('halt-body');
        }
    });

    return (
        <>
        <header>
            <div className="header-content">
                <div className="header-logo">
                    <div id="logo">
                        <NavLink to='/' title="Cablemakers" aria-label="Cablemakers Logo for Homepage">
                            {/* <span className="logo-cable">Cable</span>
                            <span className="logo-makers">Makers</span> */}
                            <img src={cablemakerslogo} alt="" />
                        </NavLink>
                        <div className={activeMenuIcon ? "header-menu-icon active-menu-icon" : "header-menu-icon"} onClick={toggleMenuIcon}>
                            <div className="menu-icon"></div>
                            <div className="menu-icon"></div>
                            <div className="menu-icon"></div>
                        </div>
                    </div>
                </div>
                <nav className={activeMenuIcon ? "active-nav-menu" : ""}>
                    <ul>
                        <li className="header-nav-link"><NavLink onClick={() => setActiveMenuIcon(false)} to='/' className={({ isActive }) => (isActive ? 'active-link' : '')} title="Home" aria-label="Home Navigation Link">Home</NavLink></li>
                        <li className="header-nav-link"><NavLink onClick={() => setActiveMenuIcon(false)} to='/products' className={({ isActive }) => (isActive ? 'active-link' : '')} title="Products" aria-label="Products Navigation Link">Products</NavLink></li>
                        <li className="header-nav-link"><NavLink onClick={() => setActiveMenuIcon(false)} to='/services' className={({ isActive }) => (isActive ? 'active-link' : '')} title="Services" aria-label="Services Navigation Link">Services</NavLink></li>
                        <li className="header-nav-link"><NavLink onClick={() => setActiveMenuIcon(false)} to='/projects' className={({ isActive }) => (isActive ? 'active-link' : '')} title="Projects" aria-label="Projects Navigation Link">Projects</NavLink></li>
                        <li className="header-nav-link"><NavLink onClick={() => setActiveMenuIcon(false)} to='/about-us' className={({ isActive }) => (isActive ? 'active-link' : '')} title="About" aria-label="About Navigation Link">About</NavLink></li>
                        <li className="header-nav-link"><NavLink onClick={() => setActiveMenuIcon(false)} to='/contact-us' className={({ isActive }) => (isActive ? 'active-link' : '')} title="Contact" aria-label="Contact Navigation Link">Contact</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
        <Breadcrumb />
        </>
    );
};

export default Header;
import { Link } from "react-router-dom";
import ProductCard from "./common/ProductCard";
import products from "../assets/file/products.json";

const Home = () => {
    
    return(
        <div className="page-wrapper">
            <div className="product-grid">
                { products.map((product) => (
                    product.visible != false ? <ProductCard key={product.id} product={product} /> : ""
                )) }
            </div>
            <div className="articles articles-grid">
                <article>
                    <div className="article-header-image welcome-header-image">
                        <h1>Welcome To Cablemakers</h1>
                    </div>
                    <p>Are you looking for a wide range of cable types from leading manufacturers? Do you need a reliable supplier who will get you what you want on time and within budget?</p>
                    <p>Cablemakers is the comprehensive cable solution you have been searching for! Supplying every market sector, including the mining, industrial, commercial, domestic and project sectors, Cablemakers has the ability to purchase in bulk from reliable cable manufacturers and distribute directly to your site, ensuring minimal down time and cost.</p>
                </article>
                <article>
                    <div className="article-header-image drum-header-image">
                        <h1>Drum It In</h1>
                    </div>
                    <p>We now supply cable strippers.</p>
                    <p>We bring quality electrical cable to the Aussies who need it most.</p>
                    <p>We have access to specialist manufacturers for all your cable requirements.</p>
                </article>
                <article>
                    <div className="article-header-image locations-header-image">
                        <h1>Locations</h1>
                    </div>
                    <p>We have branches located across;</p>
                    <ul className="located-across">
                        <li title="Cablemakers Townsville">Townsville</li>
                        <li title="Cablemakers Brisbane">Brisbane</li>
                        <li title="Cablemakers South Australia">South Australia</li>
                    </ul>
                    <p>Need any assistance, please don't hesitate to contact us.</p>
                    <div className="article-link">
                        <Link to='/contact' title="Contact Us" aria-label="Contact Us Link">Contact Us</Link>
                    </div>
                </article>
                <article>
                    <div className="article-image">
                        <Link to='./red-devil-machine.pdf' title="Wire Stripper" target="_blank" className="article-image-link">
                            <img src="./wire-stripper.jpg" alt="Wire Stripper" />
                        </Link>
                    </div>
                </article>
                <article>
                    <div className="article-image">
                        <img src="./old-drums.jpg" alt="Drum It In" />
                    </div>
                </article>
            </div>
        </div>
    );
}

export default Home;
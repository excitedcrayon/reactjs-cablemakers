import ProductCard from "./common/ProductCard";
import products from "../../public/data/products.json";
import { motion } from "framer-motion";
import { pagevariant } from "../animation/PageVariant";
import { pagetransition } from "../animation/PageTransition";
import { Helmet } from "react-helmet-async";

const Products = () => {
    return(
        <>
        <Helmet>
            <title>Cablemakers | Products</title>
            <meta name="description" content="Having a strong working relationship with all major cable manufacturers means that Cablemakers North Queensland can source that hard to find cable and with the added advantage of bulk buying power it means that we offer the cheapest price."/>
            <meta name="keywords" content="Cable Makers North Queensland, XLPE, Building Wire, PVC SDI, PVC Flat, Orange Circ, Control, XLPE Aerial, Flexible Control"/>
        </Helmet>
        <motion.div initial="out" animate="in" exit="out" variants={pagevariant} transition={pagetransition}>
            <div className="page-wrapper">
                <div className="page-header products-header" data-header-name="Products">
                    <h1>Products</h1>
                </div>
                <div className="articles">
                    <article>
                        <div className="product-grid">
                            { products.map((product) => (
                                product.visible != false ? <ProductCard key={product.id} product={product} /> : ""
                            ))}
                        </div>
                    </article>
                </div>
            </div>
        </motion.div>
        </>
    );
};

export default Products;
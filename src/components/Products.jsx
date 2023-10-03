import ProductCard from "./common/ProductCard";
import products from "../assets/file/products.json";
import { motion } from "framer-motion";
import { pagevariant } from "../animation/PageVariant";
import { pagetransition } from "../animation/PageTransition";

const Products = () => {
    return(
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
    );
};

export default Products;
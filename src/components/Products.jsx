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
            </div>
        </motion.div>
    );
};

export default Products;
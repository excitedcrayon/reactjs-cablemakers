import { motion } from "framer-motion";
import { pagevariant } from "../animation/PageVariant";
import { pagetransition } from "../animation/PageTransition";

const FourOFour = () => {
    return (
        <motion.div initial="out" animate="in" exit="out" variants={pagevariant} transition={pagetransition}>
            <div className="page-wrapper">
                <div className="page-header page-not-found-header" data-header-name="Page Not Found">
                    <h1>Page Not Found</h1>
                </div>
                <div className="articles">
                    <article>
                        <p>Sorry, we cannot find that content</p>
                    </article>
                </div>
            </div>
        </motion.div>
    );
};

export default FourOFour;
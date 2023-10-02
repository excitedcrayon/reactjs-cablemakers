import { motion } from "framer-motion";
import { pagevariant } from "../animation/PageVariant";
import { pagetransition } from "../animation/PageTransition";

const Contact = () => {
    return(
        <motion.div initial="out" animate="in" exit="out" variants={pagevariant} transition={pagetransition}>
            <div className="page-wrapper">
                <div className="page-header contact-header" data-header-name="Contact">
                    <h1>Contact</h1>
                </div>
                <div className="articles article-flex-half">
                    <article>
                        <div className="contact-form"></div>
                    </article>
                    <article>
                        <div className="contact-locations"></div>
                    </article>
                </div>
            </div>
        </motion.div>
    );
};

export default Contact;
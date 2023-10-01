import { motion } from "framer-motion";
import { pagevariant } from "../animation/PageVariant";
import { pagetransition } from "../animation/PageTransition";

const Projects = () => {
    return(
        <motion.div initial="out" animate="in" exit="out" variants={pagevariant} transition={pagetransition}>
            <div className="page-wrapper">
                <div className="page-header services-header" data-header-name="Projects">
                    <h1>Projects</h1>
                </div>
            </div>
        </motion.div>
    );
};

export default Projects;
import { motion } from "framer-motion";
import { pagevariant } from "../animation/PageVariant";
import { pagetransition } from "../animation/PageTransition";
import { Helmet } from "react-helmet-async";

const SiteDisclaimer = () => {
    return (
        <>
        <Helmet>
            <title>Cablemakers | Site Disclaimer</title>
            <meta name="description" content="Cablemakers Site Disclaimer. Are you looking for a wide range of cable types from leading manufacturers? Do you need a reliable supplier who will get you what you want on time and within budget?"/>
            <meta name="keywords" content="Cablemakers, site, disclaimer, supplying, purchase, bulk, manufacturers, direct distribution"/>
        </Helmet>
        <motion.div initial="out" animate="in" exit="out" variants={pagevariant} transition={pagetransition}>
            <div className="page-wrapper">
                <div className="page-header products-header" data-header-name="Site Disclaimer">
                    <h1>Site Disclaimer</h1>
                </div>
                <div className="articles">
                    <article>
                        <p>Are you looking for a wide range of cable types from leading manufacturers? Do you need a reliable supplier who will get you what you want on time and within budget?</p>
                        <p>Cablemakers is the comprehensive cable solution you have been searching for! Supplying every market sector, including the mining, industrial, commercial, domestic and project sectors, Cablemakers has the ability to purchase in bulk from reliable cable manufacturers and distribute directly to your site, ensuring minimal down time and cost.</p>
                    </article>
                </div>
            </div>
        </motion.div>
        </>
    );
};

export default SiteDisclaimer;
import ServiceCard from "./common/ServiceCard";
import serviceData from "../assets/file/services.json";
import serviceimage from "../assets/image/services.jpeg";
import { motion } from "framer-motion";
import { pagevariant } from "../animation/PageVariant";
import { pagetransition } from "../animation/PageTransition";
import { Helmet } from "react-helmet-async";

const Services = () => {

    return(
        <>
        <Helmet>
            <title>Cablemakers | Services</title>
            <meta name="description" content="Offer the ability to cut to size cable lengths, same day despatch, customised cable distribution, direct to site, project cable management, local delivery and the ability to source any cable configuration and size."/>
            <meta name="keywords" content="Cable Makers north queesnland, dispatch, customised cable distribution, direct to site, project cable management, local delivery, source cable"/>
        </Helmet>
        <motion.div initial="out" animate="in" exit="out" variants={pagevariant} transition={pagetransition}>
            <div className="page-wrapper">
                <div className="page-header services-header" data-header-name="Services">
                    <h1>Services</h1>
                </div>
                <div className="articles">
                    <article>
                        <p className="text-center">Cablemakers can satisfy all your cable needs with a range of products and services.</p>
                        <div className="service-list">
                            {serviceData.map((service, key) => {
                                return(
                                    <ServiceCard key={key} service={service} />
                                )
                            })}
                        </div>
                        <div className="article-image article-image-dropshadow">
                            <img src={serviceimage} />
                        </div>
                    </article>
                </div>
            </div>
        </motion.div>
        </>
    );
};

export default Services;
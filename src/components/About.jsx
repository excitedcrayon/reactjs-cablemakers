import businessData from "../assets/file/businesses.json";
import BusinessCard from "./common/BusinessCard";
import { motion } from "framer-motion";
import { pagevariant } from "../animation/PageVariant";
import { pagetransition } from "../animation/PageTransition";
import { Helmet } from "react-helmet-async";

const About = () => {
    return(
        <>
        <Helmet>
            <title>Cablemakers | About</title>
            <meta name="description" content="Cablemakers North Queensland were established to address the ever increasing problem associated with supplying cable into areas other than capital cities."/>
            <meta name="keywords" content="cable types, north queensland, developments, service, manufacturers, bulk, cut, distribute, north brisbane"/>
        </Helmet>
        <motion.div initial="out" animate="in" exit="out" variants={pagevariant} transition={pagetransition}>
            <div className="page-wrapper">
                <div className="page-header about-header" data-header-name="About">
                    <h1>About</h1>
                </div>
                <div className="articles">
                    <article>
                        <p>Cablemakers is an Australian independently owned bulk cable management and distribution business. We have strategically positioned distribution centres that provide reliable, comprehensive cabling solutions on time and on budget. We service every market including resources, industrial, commercial, government, power distribution and residential.</p>
                        <p>Our professional and friendly staff have extensive cable experience and will source all your cable requirements at a market competitive price. We purchase in bulk from reliable, highly specialised cable manufacturers, which ensures we can get what you need quickly and at the right price. Access to a national branch network means you can rely on us to deliver the right solutions, first time, on time.</p>
                        <p>We can cut-to-length and distribute directly to your site, ensuring minimal down time and cost. We also have heavy duty cable cutting machines which can handle cables of all weights and sizes. No matter how large or small your requirements we are equipped to service you. We have extensive experience in project management servicing multi- million dollar projects with staggered delivery dates and multiple locations.</p>
                    </article>
                    <article>
                        <div className="article-header-image sub-header-image why-do-business cablemakers-hue">
                            <h2>Why Do Business With Us?</h2>
                        </div>
                        <div className="business-with-us-grid">
                            {businessData.map((business) => {
                                return(
                                    <BusinessCard key={business.id} business={business}/>
                                )
                            })}
                        </div>
                    </article>
                    <article>
                        <div className="article-header-image sub-header-image our-experience cablemakers-hue">
                            <h2>Our Experience</h2>
                        </div>
                        <p>We deliver cost-effective, complete cable solutions to some of the most demanding industries and significant projects throughout Australia such as mine sites, sugar mills, commercial buildings, industrial processing plants, electrical wholesalers, utilities and infrastructure projects. Major projects often require us to manage the cable supply chain process from the initial order placement to project completion, or to create innovative solutions which leverage our advanced business practices and world-class experience.</p>
                        <p>We provide stock support and technical expertise which ensures our supply and service levels are consistent and not impacted by issues such as weather or manufacturing delays. We have extensive levels of inventory across multiple cable categories in stock at any given time so you won’t have any down time waiting for cable supplies.</p>
                        <p>Cablemakers orders in bulk economic order quantities (EOQ) from reliable, specialised Australian and international cable manufacturers, to ensure highly competitive pricing and fast delivery. We can provide local cutting, drumming, labelling and documentation, which provides flexibility in terms of changing project schedules and unexpected requirements. This significantly lowers the risk associated with delivery delays, installation rescheduling costs, and labour/equipment downtime. Local co-operation with the site combined with integrated cable management ensures only the product required at any given point in time is on site. The lengths are cut from master drums using software to continuously optimise the cuts based on actual consumption and schedule status of the project. This reduces site congestion, lowers the risk of incorrect installation, and allows for more accurate site measurements, thereby reducing waste, time and money.</p>
                    </article>
                </div>
            </div>
        </motion.div>
        </>
    );
};

export default About;
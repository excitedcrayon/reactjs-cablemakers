import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { pagevariant } from "../animation/PageVariant";
import { pagetransition } from "../animation/PageTransition";
import { Helmet } from "react-helmet-async";

const PrivacyPolicy = () => {
    return (
        <>
        <Helmet>
            <title>Cablemakers | Privacy Policy</title>
            <meta name="description" content="Cablemakers Privacy Policy"/>
            <meta name="keywords" content="Cablemakers, Privacy, Policy, Privacy Policy"/>
        </Helmet>
        <motion.div initial="out" animate="in" exit="out" variants={pagevariant} transition={pagetransition}>
            <div className="page-wrapper">
                <div className="page-header products-header" data-header-name="Privacy Policy">
                    <h1>Privacy Policy</h1>
                </div>
                <div className="page-last-updated"><small></small></div>
                <div className="articles">
                    <article>
                        <div className="article-header">
                            <h2>Personal identification information</h2>
                        </div>
                        <p>We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, register on the site, place an order, fill out a form, and in connection with other activities, services, features or resources we make available on our Site. Users may be asked for, as appropriate, name, email address, mailing address, phone number, credit card information. Users may, however, visit our Site anonymously. We will collect personal identification information from Users only if they voluntarily submit such information to us. Users can always refuse to supply personally identification information, except that it may prevent them from engaging in certain Site related activities.</p>
                    </article>
                    <article>
                        <div className="article-header">
                            <h2>Non-personal identification information</h2>
                        </div>
                        <p>We may collect non-personal identification information about Users whenever they interact with our Site. Non-personal identification information may include the browser name, the type of computer and technical information about Users means of connection to our Site, such as the operating system and the Internet service providers utilized and other similar information.</p>
                    </article>
                    <article>
                        <div className="article-header">
                            <h2>Web browser cookies</h2>
                        </div>
                        <p>Our Site may use "cookies" to enhance User experience. User's web browser places cookies on their hard drive for record-keeping purposes and sometimes to track information about them. User may choose to set their web browser to refuse cookies, or to alert you when cookies are being sent. If they do so, note that some parts of the Site may not function properly.</p>
                    </article>
                    <article>
                        <div className="article-header">
                            <h2>How we use collected information</h2>
                        </div>
                        <p>Cablemakers may collect and use Users personal information for the following purposes:</p>
                        <ul className="article-list">
                            <li><div className="italic"><span>To improve customer service</span></div>Information you provide helps us respond to your customer service requests and support needs more efficiently.</li>
                            <li><div className="italic"><span>To personalize user experience</span></div>We may use information in the aggregate to understand how our Users as a group use the services and resources provided on our Site.</li>
                            <li><div className="italic"><span>To improve our Site</span></div>We may use feedback you provide to improve our products and services.</li>
                            <li><div className="italic"><span>To process payments</span></div>We may use the information Users provide about themselves when placing an order only to provide service to that order. We do not share this information with outside parties except to the extent necessary to provide the service.</li>
                            <li><div className="italic"><span>To run a promotion, contest, survey or other Site feature</span></div>To send Users information they agreed to receive about topics we think will be of interest to them.</li>
                            <li><div className="italic"><span>To send periodic emails</span></div>We may use the email address to send User information and updates pertaining to their order. It may also be used to respond to their inquiries, questions, and/or other requests. If User decides to opt-in to our mailing list, they will receive emails that may include company news, updates, related product or service information, etc. If at any time the User would like to unsubscribe from receiving future emails, we include detailed unsubscribe instructions at the bottom of each email or User may contact us via our Site.</li>
                        </ul>
                    </article>
                    <article>
                        <div className="article-header">
                            <h2>How we protect your information</h2>
                            <p>We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information, username, password, transaction information and data stored on our Site.</p>
                            <p>Sensitive and private data exchange between the Site and its Users happens over a SSL secured communication channel and is encrypted and protected with digital signatures.</p>
                        </div>
                        <p></p>
                    </article>
                    <article>
                        <div className="article-header">
                            <h2>Sharing your personal information</h2>
                        </div>
                        <p>We do not sell, trade, or rent Users personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates and advertisers for the purposes outlined above.</p>
                    </article>
                    <article>
                        <div className="article-header">
                            <h2>Third party websites</h2>
                        </div>
                        <p>Users may find advertising or other content on our Site that link to the sites and services of our partners, suppliers, advertisers, sponsors, licensors and other third parties. We do not control the content or links that appear on these sites and are not responsible for the practices employed by websites linked to or from our Site. In addition, these sites or services, including their content and links, may be constantly changing. These sites and services may have their own privacy policies and customer service policies. Browsing and interaction on any other website, including websites which have a link to our Site, is subject to that website's own terms and policies.</p>
                    </article>
                    <article>
                        <div className="article-header">
                            <h2>Changes to this privacy policy</h2>
                        </div>
                        <p>Cablemakers has the discretion to update this privacy policy at any time. When we do, we will revise the updated date at the bottom of this page. We encourage Users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect. You acknowledge and agree that it is your responsibility to review this privacy policy periodically and become aware of modifications.</p>
                    </article>
                    <article>
                        <div className="article-header">
                            <h2>Your acceptance of these terms</h2>
                        </div>
                        <p>By using this Site, you signify your acceptance of this policy. If you do not agree to this policy, please do not use our Site. Your continued use of the Site following the posting of changes to this policy will be deemed your acceptance of those changes.</p>
                    </article>
                    <article>
                        <div className="article-header">
                            <h2>Contacting us</h2>
                        </div>
                        <div className="article-link padding-top-bottom">
                            <Link to='/contact' title="Contact Us" aria-label="Contact Us Link">Contact Us</Link>
                        </div>
                    </article>
                </div>
            </div>
        </motion.div>
        </>
    )
};

export default PrivacyPolicy;
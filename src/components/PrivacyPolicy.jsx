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
                <div className="download">
                    <a className="doc" href="../../docs/Cablemakers-Privacy-Policy.pdf" title="Cablemakers Privacy Policy" target="_blank"><span>Download</span>
                        <svg width="800px" height="800px" viewBox="-4 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25.6686 26.0962C25.1812 26.2401 24.4656 26.2563 23.6984 26.145C22.875 26.0256 22.0351 25.7739 21.2096 25.403C22.6817 25.1888 23.8237 25.2548 24.8005 25.6009C25.0319 25.6829 25.412 25.9021 25.6686 26.0962ZM17.4552 24.7459C17.3953 24.7622 17.3363 24.7776 17.2776 24.7939C16.8815 24.9017 16.4961 25.0069 16.1247 25.1005L15.6239 25.2275C14.6165 25.4824 13.5865 25.7428 12.5692 26.0529C12.9558 25.1206 13.315 24.178 13.6667 23.2564C13.9271 22.5742 14.193 21.8773 14.468 21.1894C14.6075 21.4198 14.7531 21.6503 14.9046 21.8814C15.5948 22.9326 16.4624 23.9045 17.4552 24.7459ZM14.8927 14.2326C14.958 15.383 14.7098 16.4897 14.3457 17.5514C13.8972 16.2386 13.6882 14.7889 14.2489 13.6185C14.3927 13.3185 14.5105 13.1581 14.5869 13.0744C14.7049 13.2566 14.8601 13.6642 14.8927 14.2326ZM9.63347 28.8054C9.38148 29.2562 9.12426 29.6782 8.86063 30.0767C8.22442 31.0355 7.18393 32.0621 6.64941 32.0621C6.59681 32.0621 6.53316 32.0536 6.44015 31.9554C6.38028 31.8926 6.37069 31.8476 6.37359 31.7862C6.39161 31.4337 6.85867 30.8059 7.53527 30.2238C8.14939 29.6957 8.84352 29.2262 9.63347 28.8054ZM27.3706 26.1461C27.2889 24.9719 25.3123 24.2186 25.2928 24.2116C24.5287 23.9407 23.6986 23.8091 22.7552 23.8091C21.7453 23.8091 20.6565 23.9552 19.2582 24.2819C18.014 23.3999 16.9392 22.2957 16.1362 21.0733C15.7816 20.5332 15.4628 19.9941 15.1849 19.4675C15.8633 17.8454 16.4742 16.1013 16.3632 14.1479C16.2737 12.5816 15.5674 11.5295 14.6069 11.5295C13.948 11.5295 13.3807 12.0175 12.9194 12.9813C12.0965 14.6987 12.3128 16.8962 13.562 19.5184C13.1121 20.5751 12.6941 21.6706 12.2895 22.7311C11.7861 24.0498 11.2674 25.4103 10.6828 26.7045C9.04334 27.3532 7.69648 28.1399 6.57402 29.1057C5.8387 29.7373 4.95223 30.7028 4.90163 31.7107C4.87693 32.1854 5.03969 32.6207 5.37044 32.9695C5.72183 33.3398 6.16329 33.5348 6.6487 33.5354C8.25189 33.5354 9.79489 31.3327 10.0876 30.8909C10.6767 30.0029 11.2281 29.0124 11.7684 27.8699C13.1292 27.3781 14.5794 27.011 15.985 26.6562L16.4884 26.5283C16.8668 26.4321 17.2601 26.3257 17.6635 26.2153C18.0904 26.0999 18.5296 25.9802 18.976 25.8665C20.4193 26.7844 21.9714 27.3831 23.4851 27.6028C24.7601 27.7883 25.8924 27.6807 26.6589 27.2811C27.3486 26.9219 27.3866 26.3676 27.3706 26.1461ZM30.4755 36.2428C30.4755 38.3932 28.5802 38.5258 28.1978 38.5301H3.74486C1.60224 38.5301 1.47322 36.6218 1.46913 36.2428L1.46884 3.75642C1.46884 1.6039 3.36763 1.4734 3.74457 1.46908H20.263L20.2718 1.4778V7.92396C20.2718 9.21763 21.0539 11.6669 24.0158 11.6669H30.4203L30.4753 11.7218L30.4755 36.2428ZM28.9572 10.1976H24.0169C21.8749 10.1976 21.7453 8.29969 21.7424 7.92417V2.95307L28.9572 10.1976ZM31.9447 36.2428V11.1157L21.7424 0.871022V0.823357H21.6936L20.8742 0H3.74491C2.44954 0 0 0.785336 0 3.75711V36.2435C0 37.5427 0.782956 40 3.74491 40H28.2001C29.4952 39.9997 31.9447 39.2143 31.9447 36.2428Z" fill="#EB5757"/>
                        </svg>
                    </a>
                </div>
                <div className="articles">
                    <article>
                        <div className="article-header">
                            <h2>SCOPE & PURPOSE</h2>
                        </div>
                        <p>CABLEMAKERS NORTH QUEENSLAND PTY LTD recognise the importance of protecting the privacy and the rights of individuals in relation to their personal information. This document is our privacy policy and it tells you how we collect and manage your personal information.</p>
                    </article>
                    <article>
                        <div className="article-header">
                            <h2>POLICY STATEMENT</h2>
                        </div>
                        <p>We respect your rights to privacy under the Privacy Act 1988 (Cth) (Act) and we comply with all of the Act’s requirements in respect of the collection, management and disclosure of your personal information.</p>
                    </article>
                    <article>
                        <div className="article-header">
                            <h2>PERSONAL INFORMATION</h2>
                        </div>
                        <p>When used in this privacy policy, the term “personal information” has the meaning given to it in the Act. In general terms, it is any information that can be used to personally identify you. This may include your name, address, telephone number, email address and profession or occupation. If the information we collect personally identifies you, or you are reasonably identifiable from it, the information will be considered personal information.</p>
                        <p>We may collect the following types of personal information:</p>
                        <ul>
                            <li>name</li>
                            <li>mailing or street address</li>
                            <li>email address</li>
                            <li>telephone number</li>
                            <li>facsimile number</li>
                            <li>age or birth date</li>
                            <li>profession, occupation or job title</li>
                            <li>details of the products and services you have purchased from us or which you have enquired about, together with any additional information necessary to deliver those products and services and to respond to your enquiries</li>
                            <li>any additional information relating to you that you provide to us directly through our websites or indirectly through use of our websites or online presence, through our representatives or otherwise</li>
                            <li>information you provide to us through our service centre, customer surveys or visits by our representatives from time to time</li>
                        </ul>
                        <p>We may also collect some information that is not personal information because it does not identify you or anyone else. For example, we may collect anonymous answers to surveys or aggregated information about how users use our website.</p>
                    </article>
                    <article>
                        <div className="article-header">
                            <h2>HOW WE COLLECT YOUR PERSONAL INFORMATION</h2>
                        </div>
                        <p>We collect your personal information directly from you unless it is unreasonable or impracticable to do so. When collecting personal information from you, we may collect in ways including:</p>
                        <ul className="article-list">
                            <li>through your access and use of our website;</li>
                            <li>during conversations between you and our representatives; or</li>
                            <li>when you complete an application or purchase order.</li>
                        </ul>
                        <p>We may also collect personal information from third parties including:</p>
                        <ul className="article-list">
                            <li>from third party companies such as credit reporting agencies, law enforcement agencies and other government entities.</li>
                        </ul>
                        <p><strong>Cookies</strong></p>
                        <p>In some cases we may also collect your personal information through the use of cookies. When you access websites, a “cookie” (which is a small summary file containing a unique ID number) may be sent to your computer. These cookies enable us to recognise your computer. It also enables us to keep track of products or services you view so that, if you consent, we can send you news about those products or services. We also use cookies to measure traffic patterns, to determine which areas of our website have been visited and to measure transaction patterns in the aggregate. We use this to research our users habits so that we can improve our online products and services. Our cookies do not collect personal information. If you do not wish to receive cookies, you can set your browser so that your computer does not accept them.</p>
                        <p>We may log IP addresses (that is, the electronic addresses of computers connected to the internet) to analyse trends, administer the website, track users movements, and gather broad demographic information.</p>
                    </article>
                    <article>
                        <div className="article-header">
                            <h2>IF CABLEMAKERS NORTH QUEENSLAND PTY LTD CAN'T COLLECT YOUR PERSONAL INFORMATION</h2>
                        </div>
                        <p>If you do not provide us with the personal information described above, some or all of the following may happen</p>
                        <ul>
                            <li>we may not be able to provide the requested products or services to you, either to the same standard or at all;</li>
                            <li>we may not be able to provide you with information about products and services that you may want, including information about discounts, sales or special promotions; or</li>
                            <li>we may be unable to tailor the content of our websites to your preferences and your experience of our websites may not be as enjoyable or useful.</li>
                        </ul>
                    </article>
                    <article>
                        <div className="article-header">
                            <h2>COLLECTING, HOLDING AND DISCLOSING YOUR PERSONAL INFORMATION</h2>
                        </div>
                        <p>We collect personal information about you so that we can perform our business activities and functions and to provide best possible quality of customer service.</p>
                        <p>We collect, hold, use and disclose your personal information for the following purposes:</p>
                        <ul>
                            <li>to provide products and services to you and to send communications requested by you;</li>
                            <li>to answer enquiries and provide information or advice about existing and new products or services;</li>
                            <li>to provide you with access to protected areas of our website;</li>
                            <li>to assess the performance of the website and to improve the operation of the website;</li>
                            <li>to conduct business processing functions including providing personal information to our related bodies corporate, contractors, service providers or other third parties;</li>
                            <li>for the administrative, marketing (including direct marketing), planning, product or service development, quality control and research purposes of [CABLEMAKERS NORTH QUEENSLAND PTY LTD], its related bodies corporate, contractors or service providers;</li>
                            <li>to provide your updated personal information to our related bodies corporate, contractors or service providers;</li>
                            <li>to update our records and keep your contact details up to date;</li>
                            <li>to process and respond to any complaint made by you; and</li>
                            <li>to comply with any law, rule, regulation, lawful and binding determination, decision or direction of a regulator, or in co-operation with any governmental authority of any country (or political sub-division of a country).</li>
                        </ul>
                        <p><strong>To whom may we disclose your information?</strong></p>
                        <p>We may disclose your personal information to:</p>
                        <ul>
                            <li>our employees, related bodies corporate, contractors or service providers for the purposes of operation of our website or our business, fulfilling requests by you, and to otherwise provide products and services to you including, without limitation, web hosting providers, IT systems administrators, mailing houses, couriers, payment processors, data entry service providers, electronic network administrators, debt collectors, and professional advisors such as accountants, solicitors, business advisors and consultants;</li>
                            <li>suppliers and other third parties with whom we have commercial relationships, for business, marketing, and related purposes; and</li>
                            <li>any organisation for any authorised purpose with your express consent.</li>
                        </ul>
                        <p>We may combine or share any information that we collect from you with information collected by any of our related bodies corporate (within Australia).</p>
                    </article>
                    <article>
                        <div className="article-header">
                            <h2>DIRECT MARKETING MATERIALS</h2>
                        </div>
                        <p>We may send you direct marketing communications and information about our products and services that we consider may be of interest to you. These communications may be sent in various forms, including mail, SMS, fax and email, in accordance with applicable marketing laws, such as the Spam Act 2003 (Cth). If you indicate a preference for a method of communication, we will endeavour to use that method whenever practical to do so. In addition, at any time you may opt-out of receiving marketing communications from us by contacting us (see the details below) or by using opt-out facilities provided in the marketing communications and we will then ensure that your name is removed from our mailing list.</p>
                        <p>CABLEMAKERS NORTH QUEENSLAND PTY LTD may provide your contact information to business partners, supply line partners and other organisations for the purposes of direct marketing only where it is relevant for you, the recipient to do so.</p>
                    </article>
                    <article>
                        <div className="article-header">
                            <h2>ACCESSING AND CORRECTING YOUR PERSONAL INFORMATION</h2>
                        </div>
                        <p>You may request access to any personal information we hold about you at any time by sending an email to creditteam@bgwgroup.com.au. Where we hold information that you are entitled to access, we will try to provide you with suitable means of accessing it (for example, by mailing or emailing it to you).</p>
                        <p>There may be instances where we cannot grant you access to the personal information we hold. For example, we may need to refuse access if granting access would interfere with the privacy of others or if it would result in a breach of confidentiality. If that happens, we will give you written reasons for any refusal.</p>
                        <p>If you believe that personal information we hold about you is incorrect, incomplete or inaccurate, then you may request us to amend it. We will consider if the information requires amendment. If we do not agree that there are grounds for amendment then we will add a note to the personal information stating that you disagree with it.</p>
                    </article>
                    <article>
                        <div className="article-header">
                            <h2>DISCLOSURE OF PERSONAL INFORMATION TO ANYONE OUTSIDE AUSTRALIA</h2>
                        </div>
                        <p>We may disclose personal information to our related bodies corporate and third party suppliers and service providers located overseas for some of the purposes listed above.</p>
                        <p>We take reasonable steps to ensure that the overseas recipients of your personal information do not breach the privacy obligations relating to your personal information.</p>
                    </article>
                    <article>
                        <div className="article-header">
                            <h2>SECURITY</h2>
                        </div>
                        <p>We take reasonable steps to ensure your personal information is protected from misuse and loss and from unauthorised access, modification or disclosure. We may hold your information in either electronic or hard copy form. Personal information is destroyed or de-identified when no longer needed.</p>
                        <p>As our website is linked to the internet, and the internet is inherently insecure, we cannot provide any assurance regarding the security of transmission of information you communicate to us online. We also cannot guarantee that the information you supply will not be intercepted while being transmitted over the internet. Accordingly, any personal information or other information which you transmit to us online is transmitted at your own risk.</p>
                    </article>
                    <article>
                        <div className="article-header">
                            <h2>LINKS</h2>
                        </div>
                        <p>Our website may contain links to other websites operated by third parties. We make no representations or warranties in relation to the privacy practices of any third party website and we are not responsible for the privacy policies or the content of any third party website. Third party websites are responsible for informing you about their own privacy practices.</p>
                    </article>
                    <article>
                        <div className="article-header">
                            <h2>BREACH OF PRIVACY</h2>
                        </div>
                        <p>If you believe that your privacy has been breached, please contact us using the contact information below and provide details of the incident so that we can investigate it.</p>
                        <p>Our procedure for investigating and dealing with privacy breaches is located below.</p>
                    </article>
                    <article>
                        <div className="article-header">
                            <h2>CHANGES TO OUR PRIVACY POLICY</h2>
                        </div>
                        <p>We may change this privacy policy from time to time. Any updated versions of this privacy policy will be posted on our website.</p>
                        <p>This privacy policy was last updated on March 2014.</p>
                        <p>If you have any questions about this privacy policy, any concerns or a complaint regarding the treatment of your privacy or a possible breach of your privacy, please contact The Privacy Officer using the details set out below.</p>
                        <p>We will treat your requests or complaints confidentially. Our representative will contact you within a reasonable time after receipt of your complaint to discuss your concerns and outline options regarding how they may be resolved. We will aim to ensure that your complaint is resolved in timely and appropriate manner.</p>
                    </article>
                    <article>
                        <div className="article-header">
                            <h2>COMPLAINTS HANDLING POLICY</h2>
                        </div>
                        <p>The goal of the complaints handling process is to achieve an effective resolution of your complaint within a reasonable time frame.</p>
                        <p><strong>Making a complaint</strong></p>
                        <p>The complaint must include the following information:</p>
                        <ul>
                            <li>Name</li>
                            <li>Address</li>
                            <li>Contact Number</li>
                            <li>Email address</li>
                            <li>Who your complaint is about</li>
                            <li>What your complaint is about – why your privacy has been breached, what happened, where it happened and when it happened.  We request that you provide as much detail as possible</li>
                            <li>The impact of the breach on you</li>
                            <li>The outcome you wish to see from making this complaint</li>
                        </ul>
                        <p>For privacy reasons we only accept complaints made by the person involved or an authorised representative.  If you wish to complain on behalf of another person, please provide proof of authority to do so.</p>
                        <p><strong>Grievance Procedure</strong></p>
                        <p>Once the complaint has been received the Privacy Officer will acknowledge and record the complaint via our internal Privacy Complaint Register.</p>
                        <p>The Privacy Officer may liaise with the complainant to seek further information from them and in these circumstances they should be prepared to give as much detail as possible, including any additional documentation. This will enable the contact to impartially investigate the matter to determine an appropriate solution. The investigation process will be documented and all details will be kept confidential.</p>
                        <p>Once the outcome of the complaint has been handled, the complainant will be advised of the decision in writing. The reasons for the decisions will be outlined.</p>
                        <p>Where possible, complaints will be resolved within 30 days of being received.</p>
                    </article>
                    <article>
                        <div className="article-header">
                            <h2>Contacting us</h2>
                        </div>
                        <div className="article-link padding-top-bottom">
                            <Link to='/contact-us' title="Contact Us" aria-label="Contact Us Link">Contact Us</Link>
                        </div>
                    </article>
                </div>
            </div>
        </motion.div>
        </>
    )
};

export default PrivacyPolicy;
import { motion } from "framer-motion";
import { pagevariant } from "../animation/PageVariant";
import { pagetransition } from "../animation/PageTransition";
import { Helmet } from "react-helmet-async";

const TermsAndConditions = () => {
    return (
        <>
        <Helmet>
            <title>Cablemakers | Terms and Conditions</title>
            <meta name="description" content="Cablemakers may vary the Conditions from time to time, and the Conditions as varied shall be published on the Cablemakers website. The purchaser agrees that the ordering of any goods or services after the publication of the variation of the Conditions on the website will be an acceptance by the purchaser of the varied Conditions."/>
            <meta name="keywords" content="Cablemakers, general, precedence, acceptance, prices, terms of payment, delivery, goods returned for credit, cancellation, variation, warranties, inspection, risk, credit, packing, retention"/>
        </Helmet>
        <motion.div initial="out" animate="in" exit="out" variants={pagevariant} transition={pagetransition}>
            <div className="page-wrapper">
                <div className="page-header products-header" data-header-name="Terms And Conditions">
                    <h1>Terms And Conditions</h1>
                </div>
                <div className="download">
                    <a className="doc" href="../../docs/Cablemakers-Terms-And-Conditions.pdf" title="Cablemakers Terms and Conditions" target="_blank"><span>Download</span>
                        <svg width="800px" height="800px" viewBox="-4 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25.6686 26.0962C25.1812 26.2401 24.4656 26.2563 23.6984 26.145C22.875 26.0256 22.0351 25.7739 21.2096 25.403C22.6817 25.1888 23.8237 25.2548 24.8005 25.6009C25.0319 25.6829 25.412 25.9021 25.6686 26.0962ZM17.4552 24.7459C17.3953 24.7622 17.3363 24.7776 17.2776 24.7939C16.8815 24.9017 16.4961 25.0069 16.1247 25.1005L15.6239 25.2275C14.6165 25.4824 13.5865 25.7428 12.5692 26.0529C12.9558 25.1206 13.315 24.178 13.6667 23.2564C13.9271 22.5742 14.193 21.8773 14.468 21.1894C14.6075 21.4198 14.7531 21.6503 14.9046 21.8814C15.5948 22.9326 16.4624 23.9045 17.4552 24.7459ZM14.8927 14.2326C14.958 15.383 14.7098 16.4897 14.3457 17.5514C13.8972 16.2386 13.6882 14.7889 14.2489 13.6185C14.3927 13.3185 14.5105 13.1581 14.5869 13.0744C14.7049 13.2566 14.8601 13.6642 14.8927 14.2326ZM9.63347 28.8054C9.38148 29.2562 9.12426 29.6782 8.86063 30.0767C8.22442 31.0355 7.18393 32.0621 6.64941 32.0621C6.59681 32.0621 6.53316 32.0536 6.44015 31.9554C6.38028 31.8926 6.37069 31.8476 6.37359 31.7862C6.39161 31.4337 6.85867 30.8059 7.53527 30.2238C8.14939 29.6957 8.84352 29.2262 9.63347 28.8054ZM27.3706 26.1461C27.2889 24.9719 25.3123 24.2186 25.2928 24.2116C24.5287 23.9407 23.6986 23.8091 22.7552 23.8091C21.7453 23.8091 20.6565 23.9552 19.2582 24.2819C18.014 23.3999 16.9392 22.2957 16.1362 21.0733C15.7816 20.5332 15.4628 19.9941 15.1849 19.4675C15.8633 17.8454 16.4742 16.1013 16.3632 14.1479C16.2737 12.5816 15.5674 11.5295 14.6069 11.5295C13.948 11.5295 13.3807 12.0175 12.9194 12.9813C12.0965 14.6987 12.3128 16.8962 13.562 19.5184C13.1121 20.5751 12.6941 21.6706 12.2895 22.7311C11.7861 24.0498 11.2674 25.4103 10.6828 26.7045C9.04334 27.3532 7.69648 28.1399 6.57402 29.1057C5.8387 29.7373 4.95223 30.7028 4.90163 31.7107C4.87693 32.1854 5.03969 32.6207 5.37044 32.9695C5.72183 33.3398 6.16329 33.5348 6.6487 33.5354C8.25189 33.5354 9.79489 31.3327 10.0876 30.8909C10.6767 30.0029 11.2281 29.0124 11.7684 27.8699C13.1292 27.3781 14.5794 27.011 15.985 26.6562L16.4884 26.5283C16.8668 26.4321 17.2601 26.3257 17.6635 26.2153C18.0904 26.0999 18.5296 25.9802 18.976 25.8665C20.4193 26.7844 21.9714 27.3831 23.4851 27.6028C24.7601 27.7883 25.8924 27.6807 26.6589 27.2811C27.3486 26.9219 27.3866 26.3676 27.3706 26.1461ZM30.4755 36.2428C30.4755 38.3932 28.5802 38.5258 28.1978 38.5301H3.74486C1.60224 38.5301 1.47322 36.6218 1.46913 36.2428L1.46884 3.75642C1.46884 1.6039 3.36763 1.4734 3.74457 1.46908H20.263L20.2718 1.4778V7.92396C20.2718 9.21763 21.0539 11.6669 24.0158 11.6669H30.4203L30.4753 11.7218L30.4755 36.2428ZM28.9572 10.1976H24.0169C21.8749 10.1976 21.7453 8.29969 21.7424 7.92417V2.95307L28.9572 10.1976ZM31.9447 36.2428V11.1157L21.7424 0.871022V0.823357H21.6936L20.8742 0H3.74491C2.44954 0 0 0.785336 0 3.75711V36.2435C0 37.5427 0.782956 40 3.74491 40H28.2001C29.4952 39.9997 31.9447 39.2143 31.9447 36.2428Z" fill="#EB5757"/>
                        </svg>
                    </a>
                </div>
                <div className="articles">
                    <article>
                        <div className="article-header">
                            <h2>General</h2>
                        </div>
                        <p>These Standard Terms and Conditions of Sale ("the Conditions") apply to any sale of items, equipment or services of Cablemakers North Queensland Pty Ltd ("Cablemakers") or, where a quotation is made, shall form part of that quotation.</p>
                        <p>Cablemakers may vary the Conditions from time to time, and the Conditions as varied shall be published on the Cablemakers website. The purchaser agrees that the ordering of any goods or services after the publication of the variation of the Conditions on the website will be an acceptance by the purchaser of the varied Conditions.</p>
                        <p>No variation or cancellation of any of the Conditions shall be binding on Cablemakers unless agreed by a responsible officer of Cablemakers in writing. No agent or representative has the authority to waive or alter the Conditions.</p>
                        <p>The purchaser or anyone purporting to act on behalf of the purchaser may place orders for goods or services with Cablemakers by telephone, email, in writing or by facsimile transmission.</p>
                    </article>
                    <article>
                        <div className="article-header">
                            <h2>Precedence</h2>
                        </div>
                        <p>In the event of a conflict between the Conditions and those which may be included in, or implied by, any document forming part of any enquiry, specification, order or contract then the Conditions shall prevail unless they are expressly varied by Cablemakers in writing. If any Condition is contrary to or excluded by law, then the Conditions shall be modified but only to the extent of excluding that part of the Conditions so affected.</p>
                    </article>
                    <article>
                        <div className="article-header">
                            <h2>Acceptance</h2>
                        </div>
                        <p>A quotation is not to be construed as an offer or obligation to sell and Cablemakers reserves the right to decline any order for goods or services (either wholly or partially) at any time prior to the delivery of the goods or services, in which case Cablemakers shall be under no obligation in respect of such order.</p>
                    </article>
                    <article>
                        <div className="article-header">
                            <h2>Prices</h2>
                        </div>
                        <p>All prices are subject to change without notice and orders are accepted by Cablemakers on the condition that they will be invoiced at the prices ruling at the date of dispatch, but every endeavor will be made to give 30 days' notice of any increase.</p>
                        <p>All prices shown in the published catalogs or price lists are recommended selling prices only and there is no obligation on the part of any reseller to maintain such prices.</p>
                        <p>A quotation includes only such goods as are specified therein. Cablemakers reserves the right to cancel any sale where goods offered ex-stock have been previously sold or otherwise committed.</p>
                        <p>A $20 surcharge may apply at the discretion of Cablemakers if an order value is less than $100.</p>
                    </article>
                    <article>
                        <div className="article-header">
                            <h2>Terms Of Payment</h2>
                        </div>
                        <p>The purchaser agrees to comply with the Conditions and payment for goods and services shall be made by the purchaser to Cablemakers thirty (30) days from the end of the month of purchase, unless otherwise agreed in writing by Cablemakers.</p>
                    </article>
                    <article>
                        <div className="article-header">
                            <h2>Delivery</h2>
                        </div>
                        <p>Cablemakers will endeavor to comply with the time of delivery of goods and services requested by the purchaser but delivery time is not guaranteed nor is time of the essence of the contract of sale of the goods and services. Cablemakers will not be liable for any loss or damage of whatsoever nature arising out of a delay in delivery of goods or services. The delivery period quoted commences from the date Cablemakers receives sufficient information to proceed with the supply or from the date Cablemakers receives the purchaser's written order, whichever is the later. Quoted delivery dates are subject to confirmation when placing the order.</p>
                    </article>
                    <article>
                        <div className="article-header">
                            <h2>Goods Returned For Credit</h2>
                        </div>
                        <p>Goods will not be accepted for credit without prior approval of personnel at Cablemakers nearest sales office.</p>
                        <p>In the case of the return of buy-ins against the purchaser’s order, credit will only be allowed if the original manufacturer/supplier also accepts the return.</p>
                        <p>All goods returned should be in their original containers and should not be shop soiled, obsolete or shop damaged. All such goods may be rejected or credited at a reduced rate.</p>
                        <p>Cut lengths of cable will not be accepted for return under any circumstances.</p>
                        <p>No claim will be recognized unless such claim is made within seven (7) days of delivery and in every case the original invoice number and date must be quoted.</p>
                        <p>All goods approved for return shall be returned freight prepaid and may be subject to a 15% restocking charge.</p>
                    </article>
                    <article>
                        <div className="article-header">
                            <h2>Cancellation</h2>
                        </div>
                        <p>Any order may, at the option of Cablemakers, be terminated in the event of insolvency of the purchaser or of execution being levied against any of the goods of the purchaser or the purchaser being placed into administration or liquidation, whether voluntary or otherwise, or of a mortgagee entering into possession of any assets of the purchaser or the purchaser's credit worthiness or credit standing alters, in the opinion of Cablemakers, from that disclosed in its application for credit.</p>
                    </article>
                    <article>
                        <div className="article-header">
                            <h2>Variation</h2>
                        </div>
                        <p>A variation or cancellation of any order by the purchaser is subject to acceptance by Cablemakers of such variation or cancellation and in the event of such agreement the purchaser hereby indemnifies Cablemakers against any loss or damage as a result of such variation or cancellation.</p>
                    </article>
                    <article>
                        <div className="article-header">
                            <h2>Warranties Limited</h2>
                        </div>
                        <p>Cablemakers warrants that the goods it supplies shall be of good and merchantable quality and its liability shall be limited only to the repair or replacement of any faulty or defective goods in terms of the manufacturer's warranty and Cablemakers does not, unless specifically required by law, give any warranty beyond the manufacturer's warranty, and in no event shall Cablemakers be liable either under statute, in equity, in contract or tort (including in negligence) or otherwise for any direct or indirect special consequential or punitive loss or damages (including loss of income, profits or business, loss of goodwill or reputation or loss of value of intellectual property) to persons or property, whether foreseeable or unforeseeable, arising from or caused in any way by such goods.</p>
                    </article>
                    <article>
                        <div className="article-header">
                            <h2>Inspection</h2>
                        </div>
                        <p>The purchaser has seven (7) days from the date of delivery of the goods within which to provide Cablemakers with written notice of any claim for alleged failure to comply with an order whether due to a shortfall, defect, incorrect delivery or otherwise. Should the purchaser fail to provide such written notice within the stipulated time period then Cablemakers shall be deemed to have complied with the purchaser's order in all respects including delivery, quality and quantity</p>
                    </article>
                    <article>
                        <div className="article-header">
                            <h2>Packing, Damage or Loss in Transit</h2>
                        </div>
                        <p>Cablemakers uses every care in packing but, unless otherwise agreed, shall not be liable for any loss or damage in transit, and any claim in relation to such loss or damage shall not be accepted by Cablemakers and shall be a matter between the purchaser and the railway, shipping company or carrier. The purchaser shall inspect and check all goods received as soon as practicable upon unloading. No claim for shortage of goods shall be made to Cablemakers after forty-eight (48) hours of such inspection, and while Cablemakers shall endeavor to rectify any shortage as soon as practicable after receipt of any claim, it shall not be liable in respect of such rectification.</p>
                    </article>
                    <article>
                        <div className="article-header">
                            <h2>Purchaser's Specifications</h2>
                        </div>
                        <p>Cablemakers shall be under no obligation to comply with any specification or drawings referred to in any order unless such specifications or drawings have been produced to Cablemakers prior to delivery of goods and signed by Cablemakers. Otherwise Cablemakers does not warrant nor represent that the goods are fit for a particular purpose and the purchaser agrees that it does not rely on the skill and judgment of Cablemakers in relation to the suitability of the goods for a particular purpose. All such warranties are hereby excluded to the maximum extent permitted by law.</p>
                    </article>
                    <article>
                        <div className="article-header">
                            <h2>Risk</h2>
                        </div>
                        <p>All goods sold shall be at the risk of the purchaser from the time of dispatch of the goods by Cablemakers for delivery to the purchaser and the purchaser shall be solely responsible for ensuring the goods in transit.</p>
                    </article>
                    <article>
                        <div className="article-header">
                            <h2>Credit</h2>
                        </div>
                        <p>Cablemakers may at any time suspend or vary any credit extended to the purchaser or withhold the delivery of goods or services already ordered as Cablemakers in its sole and absolute discretion determines.</p>
                    </article>
                    <article>
                        <div className="article-header">
                            <h2>Default of Purchaser</h2>
                        </div>
                        {/* <p>The purchaser expressly agrees that if the purchaser fails to pay Cablemakers the invoiced price of any goods and services by the due date for payment, then Cablemakers: shall have the immediate right to bring an action against the purchaser for payment of the invoice price of the said goods and services, notwithstanding that ownership and property in the said goods and services shall not have passed to the customer; may refuse to supply any other goods and services to the purchaser; may claim the return of any goods in the possession of the purchaser where title in such goods has not passed to the purchaser; may determine the contract and/or suspend manufacture or delivery, installation, commissioning or testing of any goods then outstanding; may retain any security given or money paid by the purchaser or available through enforcement of guarantee or security bonds lodged and may apply such security or money against the loss and damages incurred by the failure of the purchaser to pay; may withdraw or vary any credit extended to the purchaser without notice to the purchaser; may without notice make all moneys owing by the purchaser to Cablemakers on any account immediately due and payable; may take such steps as it deems necessary to mitigate any damage suffered including the putting to use, hiring out, sale or disposal of any goods in its possession supplied or to be supplied to the purchaser; and may charge interest on overdue accounts at the rate not exceeding the standard overdraft rate offered by the Commonwealth bank of Australia on the day of calculation.</p> */}
                        <p>The purchaser expressly agrees that if the purchaser fails to pay Cablemakers the invoiced price of any goods and services by the due date for payment, then Cablemakers:</p>
                        <ul>
                            <li>shall have the immediate right to bring an action against the purchaser for payment of the invoice price of the said goods and services, notwithstanding that ownership and property in the said goods and services shall not have passed to the customer;</li>
                            <li>may refuse to supply any other goods and services to the purchaser;</li>
                            <li>may claim the return of any goods in the possession of the purchaser where title in such goods has not passed to the purchaser;</li>
                            <li>may determine the contract and/or suspend manufacture or delivery, installation, commissioning or testing of any goods then outstanding;</li>
                            <li>may retain any security given or money paid by the purchaser or available through enforcement of guarantee or security bonds lodged and may apply such security or money against the loss and damages incurred by the failure of the purchaser to pay;</li>
                            <li>may withdraw or vary any credit extended to the purchaser without notice to the purchaser;</li>
                            <li>may without notice make all moneys owing by the purchaser to Cablemakers on any account immediately due and payable;</li>
                            <li>may take such steps as it deems necessary to mitigate any damage suffered including the putting to use, hiring out, sale or disposal of any goods in its possession supplied or to be supplied to the purchaser; and</li>
                            <li>may charge interest on overdue accounts at the rate not exceeding the standard overdraft rate offered by the Commonwealth Bank of Australia on the day of calculation.</li>
                        </ul>
                    </article>
                    <article>
                        <div className="article-header">
                            <h2>Retention Of Title</h2>
                        </div>
                        <p>Defined terms used in this clause have the same meaning as given to them in the Personal Property Securities Act 2009 (Cwth,) ("PPSA").</p>
                        <p>Cablemakers and purchaser acknowledge that a contract constitutes a Security Agreement and gives rise to a Purchase Money Security Interest (PMSI) in favor of Cablemakers over the goods supplied to the purchaser, as Grantor, pursuant to a contract, and over the Proceeds (including any sale monies or an account for such monies and insurance monies).</p>
                        <p>The goods supplied or to be supplied under a contract fall within the PPSA classification of "other Goods" acquired by the purchaser pursuant to these Conditions.</p>
                        <p>The purchaser acknowledges that Cablemakers, as Secured Party, is entitled to register its interest in the goods supplied or to be supplied to the purchaser, as Grantor, under a contract on the PPSA Register as Collateral.</p>
                        <p>The purchaser waives its right to any of the following under the PPSA:</p>
                        <ul>
                            <li>receive notification of or a copy of any Verification Statement confirming registration of a Financing Statement or a Financing Change Statement relating to a Security Interest granted by the Purchaser, as Grantor, to Cablemakers;</li>
                            <li>Receive notice of removal of an Accession under section 95;</li>
                            <li>Receive notice of an intention to seize Collateral under section 123;</li>
                            <li>Receive notice of disposal of Collateral under section 130;</li>
                            <li>Receive a Statement of Account if there is no disposal under section 130(4);</li>
                            <li>Receive notice of retention of Collateral under section 135;</li>
                            <li>Redeem the Collateral under section 142;</li>
                            <li>Reinstate the Security Agreement under section 143;</li>
                            <li>Object to the purchase of the Collateral by the Secured Party under section 129;</li>
                            <li>Receive a Statement of Account under section 132(3)(d) following a disposal showing the amounts paid to other Secured Parties and whether Security Interests held by other Secured Parties have been discharged.</li>
                            <li>The purchaser agrees that, to the extent permitted by law, nothing in sections 130 to 143 of the PPSA will apply to, or the Security under, these Conditions.</li>
                            <li>The legal and equitable title in the goods will only pass to the purchaser when all monies owing by the purchaser to Cablemakers on any account whatsoever have been paid in full. The purchaser must not do or permit anything to be done which may result in the purchase money security interest granted to Cablemakers ranking in priority behind any other security interest. (ii) Until such payment in full, the purchaser acknowledges that the goods are held by the purchaser as Bailee for Cablemakers and that a fiduciary relationship exists between Cablemakers and the purchaser in relation to the goods, which must be stored separately as a fiduciary of Cablemakers in good condition and in such a way which clearly indicates the ownership of Cablemakers in the goods. (iii) While Cablemakers retains title in the goods the purchaser shall not bail, pledge, mortgage, charge, obtain or grant a lien over, lease or assign by any other way the goods or any security in the goods. (iv) The purchaser irrevocably authorizes Cablemakers by its servants or agents to enter to enter upon any site where the goods are located to take possession of the goods without any prior notice or for any purpose connected with or in relation to the protection or enforcement of the rights of Cablemakers to the goods. (v) The purchaser shall be liable for the payment of all costs, charges and expenses incurred by Cablemakers on a full indemnity basis (including legal costs, repossession costs and the cost of any mercantile agent) in the recovery or attempted recovery of the goods or of payment of any moneys owing by the purchaser to Cablemakers or in the protection or enforcement of its rights in relation to the goods. (vi) To secure payment of all moneys which may become payable by the purchaser to Cablemakers on any account whatsoever the purchaser hereby charges with the due payment of all moneys payable by the purchaser to Cablemakers all of the purchaser's beneficial interests in freehold or leasehold property held by it now or in the future as security for payment of all and any moneys payable by the purchaser to Cablemakers and consents to Cablemakers lodging a caveat or caveats noting its interest in such property, and upon demand by Cablemakers the purchaser agrees to immediately execute a mortgage or other instrument in terms satisfactory to Cablemakers to further secure payment of such moneys. The purchaser hereby and by way of security irrevocably appoints every officer and legal practitioner of Cablemakers jointly and each of them severally as the purchaser's lawful attorney with the power and for the purpose of executing (including as a deed) a mortgage or other instrument of security in any form as determined by such attorney over any real property of the purchaser to secure such moneys.</li>
                        </ul>
                        {/* <ol className="article-list">
                            <li>The legal and equitable title in the goods will only pass to the purchaser when all moneys owing by the purchaser to Cablemakers on any account whatsoever have been paid in full. Pursuant to the terms of and as defined by the Personal Property Securities Act 2009 (Cwth,) (“PPSA”) the purchaser grants to Cablemakers a security interest in the goods to secure payment of the moneys owing which is a purchase money security interest to the extent to which it secures payment of such moneys owing and consents to Cablemakers registering this security interest under the PPSA and waives any right to receive notice of such registration. The purchaser must not do or permit anything to be done which may result in the purchase money security interest granted to Cablemakers ranking in priority behind any other security interest.</li>
                            <li>Until such payment in full, the purchaser acknowledges that the goods are held by the purchaser as bailee for Cablemakers and that a fiduciary relationship exists between Cablemakers and the purchaser in relation to the goods, which must be stored separately as a fiduciary of Cablemakers in good condition and in such a way which clearly indicates the ownership of Cablemakers in the goods.</li>
                            <li>While Cablemakers retains title in the goods the purchaser shall not bail, pledge, mortgage, charge, obtain or grant a lien over, lease or assign by any other way the goods or any security in the goods.</li>
                            <li>The purchaser irrevocably authorises Cablemakers by its servants or agents to enter to enter upon any site where the goods are located to take possession of the goods without any prior notice or for any purpose connected with or in relation to the protection or enforcement of the rights of Cablemakers to the goods.</li>
                            <li>The purchaser shall be liable for the payment of all costs, charges and expenses incurred by Cablemakers on a full indemnity basis (including legal costs, repossession costs and the cost of any mercantile agent) in the recovery or attempted recovery of the goods or of payment of any moneys owing by the purchaser to Cablemakers or in the protection or enforcement of its rights in relation to the goods.</li>
                            <li>To secure payment of all moneys which may become payable by the purchaser to Cablemakers on any account whatsoever the purchaser hereby charges with the due payment of all moneys payable by the purchaser to Cablemakers all of the purchaser’s beneficial interests in freehold or leasehold property held by it now or in the future as security for payment of all and any moneys payable by the purchaser to Cablemakers and consents to Cablemakers lodging a caveat or caveats noting its interest in such property, and upon demand by Cablemakers the purchaser agrees to immediately execute a mortgage or other instrument in terms satisfactory to Cablemakers to further secure payment of such moneys. The purchaser hereby and by way of security irrevocably appoints every officer and legal practitioner of Cablemakers jointly and each of them severally as the purchaser’s lawful attorney with the power and for the purpose of executing (including as a deed) a mortgage or other instrument of security in any form as determined by such attorney over any real property of the purchaser to secure such moneys.</li>
                        </ol> */}
                    </article>
                    <article>
                        <div className="article-header">
                            <h2>Disputes</h2>
                        </div>
                        <p>If the purchaser disputes any charge appearing on an invoice then the purchaser shall give written notice of such dispute to Cablemakers immediately upon receipt of invoice and shall pay all other charges not in dispute on the invoice pending an investigation of the dispute.</p>
                    </article>
                    <article>
                        <div className="article-header">
                            <h2>Opening a Trading Account</h2>
                        </div>
                        <p><strong>IT IS AGREED:</strong> The applicant certifies that the information supplied to Cablemakers for the purpose of assessing the suitability for providing the applicant with a 30 Day Credit Facilities is correct at time of writing, and is authorized on behalf of the applicant to make this application and contract on behalf of the applicant and give the warranties outlined in this application.</p>
                        <p>Cablemakers reserves the right to withdraw credit facilities at any time without notice.</p>
                        <p>The Purchaser will be liable for any costs incurred in enforcing payment of the account.</p>
                        <p>Should the amount owing under the credit facility at any time exceed the limit mentioned on this application, Cablemakers reserves the light to suspend credit facilities until such time as the amount outstanding is reduced below the limit established.</p>
                        <p>Terms are strictly 30 DAYS from Statement date, i.e. Purchases made during one month are due and payable by the 30th day of the following month. Failure to pay within these terms could result in suspension of Credit Facilities until ALL outstanding amounts are paid in FULL.</p>
                        <p>Cablemakers reserves the right to charge interest on overdue amounts at the rate not exceeding the standard overdraft rate offered by the Commonwealth Bank on the day of calculation. Such interest if applied shall be charged directly to your account.</p>
                        <p>All goods shall be sold in accordance with the "STANDARD TERMS AND CONDITIONS" as outlined on the purchase invoice.</p>
                        <p>Should any changes take place affecting the legal entity, structure or management control of the applicant, then Cablemakers will be notified immediately in writing.</p>
                        <p><strong>That unless otherwise stated in this application, the applicant declares that is not structured on a trusteeship involving discretionary, unit or family trusts</strong></p>
                        <p><u>Notice of disclosure of your credit information to a credit reporting agency</u></p>
                        <p>Under Section 18E (8) (c) of the Privacy Act Cablemakers is allowed to give a credit reporting agency personal information about the applicant's credit application. The information which may be given to an agency is covered by Section 18E (1) of the Act and includes:</p>
                        <ul>
                            <li>Identity particulars (as permitted by the Privacy Commissioner's determination issued under s.18E(3));</li>
                            <li>The fact that the applicant has applied for credit and the amount;</li>
                            <li>The fact that Cablemakers is a current credit provider to the applicant;</li>
                            <li>Payments which become overdue more than 60 days, and for which collection action has commenced;</li>
                            <li>Advice that payments are no longer overdue;</li>
                            <li>Cheques drawn by the applicant which have been dishonored more than once;</li>
                            <li>In specified circumstances, that in the opinion of Cablemakers the applicant has committed a serious credit infringement</li>
                            <li>That credit provided to the applicant by Cablemakers has been paid or otherwise discharged.</li>
                            <li>Please refer to the Privacy Policy for further information</li>
                        </ul>
                        <p>The jurisdiction for any legal claim arising from any default will always remain in the State of Queensland. </p>
                        <p>Costs associated with the collection of any overdue account will be the responsibility of the credit applicant.</p>
                        <p>If Cablemakers considers it relevant to assessing any application for commercial credit, Cablemakers may obtain from a credit reporting agency a credit report containing personal information about the applicant in relation to commercial credit provided by Cablemakers.</p>
                    </article>
                    <article>
                        <div className="article-header">
                            <h2>Your Credit Limit</h2>
                        </div>
                        <p>To help manage your account, for future transactions, Cablemakers reserves the right to re-assess the customer's credit limit at any time for reasons such as outstanding balance exceeding the current limit currently in place or payments received outside our terms and conditions. It is agreed for Cablemakers to assess the account at any time to change credit limit if needed without authorisation based on trading history.</p>
                    </article>
                </div>
            </div>
        </motion.div>
        </>
    );
};

export default TermsAndConditions;
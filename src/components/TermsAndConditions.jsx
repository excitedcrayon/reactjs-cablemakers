import { motion } from "framer-motion";
import { pagevariant } from "../animation/PageVariant";
import { pagetransition } from "../animation/PageTransition";

const TermsAndConditions = () => {
    return (
        <motion.div initial="out" animate="in" exit="out" variants={pagevariant} transition={pagetransition}>
            <div className="page-wrapper">
                <div className="page-header products-header" data-header-name="Terms And Conditions">
                    <h1>Terms And Conditions</h1>
                </div>
                <div className="articles">
                    <article>
                        <div className="article-header">
                            <h2>General</h2>
                        </div>
                        <p>These Standard Terms and Conditions of sale (“the Conditions”) apply to any sale of items, equipment or services of the Cable Makers North Queensland Pty Ltd (“Cable Makers”) or, where a quotation is made, shall form part of that quotation.</p>
                        <p>Cable Makers may vary the Conditions from time to time, and the Conditions as varied shall be published on the Cable Makers website. The purchaser agrees that the ordering of any goods or services after the publication of the variation of the Conditions on the website will be an acceptance by the purchaser of the varied Conditions.</p>
                        <p>No variation or cancellation of any of the Conditions shall be binding on Cable Makers unless agreed by a responsible officer of Cable Makers in writing. No agent or representative has the authority to waive or alter the Conditions.</p>
                        <p>The purchaser or anyone purporting to act on behalf of the purchaser may place orders for goods or services with Cable Makers by telephone, email, in writing or by facsimile transmission.</p>
                    </article>
                    <article>
                        <div className="article-header">
                            <h2>Precedence</h2>
                        </div>
                        <p>In the event of a conflict between the Conditions and those which may be included in, or implied by, any document forming part of any enquiry, specification, order or contract then the Conditions shall prevail unless they are expressly varied by Cable Makers in writing. If any Condition is contrary to or excluded by law then the Conditions shall be modified but only to the extent of excluding that part of the Conditions so affected.</p>
                    </article>
                    <article>
                        <div className="article-header">
                            <h2>Acceptance</h2>
                        </div>
                        <p>A quotation is not to be construed as an offer or obligation to sell and Cable Makers reserves the right to decline any order for goods or services (either wholly or partially) at any time prior to the delivery of the goods or services, in which case Cable Makers shall be under no obligation in respect of such order.</p>
                    </article>
                    <article>
                        <div className="article-header">
                            <h2>Prices</h2>
                        </div>
                        <p>All prices are subject to change without notice and orders are accepted by Cable Makers on the condition that they will be invoiced at the prices ruling at the date of dispatch, but every endeavour will be made to give 30 days’ notice of any increase.</p>
                        <p>All prices shown in the published catalogues or price lists are recommended selling prices only and there is no obligation on the part of any reseller to maintain such prices.</p>
                        <p>A quotation includes only such goods as are specified therein. Cable Makers reserves the right to cancel any sale where goods offered ex stock have been previously sold or otherwise committed.</p>
                        <p>A $20 surcharge may apply at the discretion of Cable Makers if an order value is less than $100.</p>
                    </article>
                    <article>
                        <div className="article-header">
                            <h2>Terms Of Payment</h2>
                        </div>
                        <p>The purchaser agrees to comply with the Conditions and payment for goods and services shall be made by the purchaser to Cable Makers thirty (30) days from the end of the month of purchase, unless otherwise agreed in writing by Cable Makers.</p>
                    </article>
                    <article>
                        <div className="article-header">
                            <h2>Delivery</h2>
                        </div>
                        <p>Cable Makers will endeavour to comply with the time of delivery of goods and services requested by the purchaser but delivery time is not guaranteed nor is time of the essence of the contract of sale of the goods and services. Cable Makers will not be liable for any loss or damage of whatsoever nature arising out of a delay in delivery of goods or services. The delivery period quoted commences from the date Cable Makers receives sufficient information to proceed with the supply or from the date Cable Makers receives the purchaser's written order, whichever is the later. Quoted delivery dates are subject to confirmation when placing the order.</p>
                    </article>
                    <article>
                        <div className="article-header">
                            <h2>Goods Returned For Credit</h2>
                        </div>
                        <p>Goods will not be accepted for credit without prior approval of personnel at Cable Makers’ nearest sales office.</p>
                        <p>In the case of the return of buy-ins against the purchaser’s order, credit will only be allowed if the original manufacturer/supplier also accepts the return.</p>
                        <p>All goods returned should be in their original containers and should not be shop soiled, obsolete or shop damaged. All such goods may be rejected or credited at a reduced rate.</p>
                        <p>Cut lengths of cable will not be accepted for return under any circumstances.</p>
                        <p>No claim will be recognized unless such claim is made within seven (7) days of delivery and in every case the original invoice number and date must be quoted.</p>
                        <p>All goods approved for return shall be returned freight pre-paid and may be subject to a 15% restocking charge.</p>
                    </article>
                    <article>
                        <div className="article-header">
                            <h2>Cancellation</h2>
                        </div>
                        <p>Any order may, at the option of Cable Makers, be terminated in the event of insolvency of the purchaser or of execution being levied against any of the goods of the purchaser or the purchaser being placed into administration or liquidation, whether voluntary or otherwise, or of a mortgagee entering into possession of any assets of the purchaser or the purchaser’s credit worthiness or credit standing alters, in the opinion of Cable Makers, from that disclosed in its application for credit.</p>
                    </article>
                    <article>
                        <div className="article-header">
                            <h2>Variation</h2>
                        </div>
                        <p>A variation or cancellation of any order by the purchaser is subject to acceptance by Cable Makers of such variation or cancellation and in the event of such agreement the purchaser hereby indemnifies Cable Makers against any loss or damage as a result of such variation or cancellation.</p>
                    </article>
                    <article>
                        <div className="article-header">
                            <h2>Warranties Limited</h2>
                        </div>
                        <p>Cable Makers warrants that the goods it supplies shall be of good and merchantable quality and its liability shall be limited only to the repair or replacement of any faulty or defective goods in terms of the manufacturer's warranty and Cable Makers does not, unless specifically required by law, give any warranty beyond the manufacturer's warranty, and in no event shall Cable Makers be liable either under statute, in equity, in contract or tort (including in negligence) or otherwise for any direct or indirect special consequential or punitive loss or damages (including loss of income, profits or business, loss of goodwill or reputation or loss of value of intellectual property) to persons or property, whether foreseeable or unforeseeable, arising from or caused in any way by such goods.</p>
                    </article>
                    <article>
                        <div className="article-header">
                            <h2>Inspection</h2>
                        </div>
                        <p>The purchaser has seven (7) days from the date of delivery of the goods within which to provide Cable Makers with written noticed of any claim for alleged failure to comply with an order whether due to a shortfall, defect, incorrect delivery or otherwise. Should the purchaser fail to provide such written notice within the stipulated time period then Cable Makers shall be deemed to have complied the purchaser's order in all respects including delivery, quality and quantity.</p>
                    </article>
                    <article>
                        <div className="article-header">
                            <h2>Packing, Damage or Loss in Transit</h2>
                        </div>
                        <p>Cable Makers uses every care in packing but, unless otherwise agreed, shall not be liable for any loss or damage in transit, and any claim in relation to such loss or damage shall not be accepted by Cable Makers and shall be a matter between the purchaser and the railway, shipping company or carrier. The purchaser shall inspect and check all goods received as soon as practicable upon unloading. No claim for shortage of goods shall be made to Cable Makers after forty eight (48) hours of such inspection, and while Cable Makers shall endeavour to rectify any shortage as soon as practicable after receipt of any claim, it shall not be liable in respect of such rectification.</p>
                    </article>
                    <article>
                        <div className="article-header">
                            <h2>Purchaser's Specifications</h2>
                        </div>
                        <p>Cable Makers shall be under no obligation to comply with any specification or drawings referred to in any order unless such specifications or drawings have been produced to Cable Makers prior to delivery of goods and signed by Cable Makers. Otherwise Cable Makers does not warrant nor represent that the goods are fit for a particular purpose and the purchaser agrees that it does not rely on the skill and judgment of Cable Makers in relation to the suitability of the goods for a particular purpose. All such warranties are hereby excluded to the maximum extent permitted by law.</p>
                    </article>
                    <article>
                        <div className="article-header">
                            <h2>Risk</h2>
                        </div>
                        <p>All goods sold shall be at the risk of the purchaser from the time of dispatch of the goods by Cable Makers for delivery to the purchaser and the purchaser shall be solely responsible for insuring the goods in transit.</p>
                    </article>
                    <article>
                        <div className="article-header">
                            <h2>Credit</h2>
                        </div>
                        <p>Cable Makers may at any time suspend or vary any credit extended to the purchaser or withhold the delivery of goods or services already ordered as Cable Makers in its sole and absolute discretion determines.</p>
                    </article>
                    <article>
                        <div className="article-header">
                            <h2>Default of Purchaser</h2>
                        </div>
                        <p>The purchaser expressly agrees that if the purchaser fails to pay Cable Makers the invoiced price of any goods and services by the due date for payment, then Cable Makers: shall have the immediate right to bring an action against the purchaser for payment of the invoice price of the said goods and services, notwithstanding that ownership and property in the said goods and services shall not have passed to the customer; may refuse to supply any other goods and services to the purchaser; may claim the return of any goods in the possession of the purchaser where title in such goods has not passed to the purchaser; may determine the contract and/or suspend manufacture or delivery, installation, commissioning or testing of any goods then outstanding; may retain any security given or money paid by the purchaser or available through enforcement of guarantee or security bonds lodged and may apply such security or money against the loss and damages incurred by the failure of the purchaser to pay; may withdraw or vary any credit extended to the purchaser without notice to the purchaser; may without notice make all moneys owing by the purchaser to Cable Makers on any account immediately due and payable; may take such steps as it deems necessary to mitigate any damage suffered including the putting to use, hiring out, sale or disposal of any goods in its possession supplied or to be supplied to the purchaser; and may charge interest on overdue accounts at the rate not exceeding the standard overdraft rate offered by the Commonwealth bank of Australia on the day of calculation.</p>
                    </article>
                    <article>
                        <div className="article-header">
                            <h2>Retention Of Title</h2>
                        </div>
                        <ol>
                            <li>The legal and equitable title in the goods will only pass to the purchaser when all moneys owing by the purchaser to Cable Makers on any account whatsoever have been paid in full. Pursuant to the terms of and as defined by the Personal Property Securities Act 2009 (Cwth,) (“PPSA”) the purchaser grants to Cable Makers a security interest in the goods to secure payment of the moneys owing which is a purchase money security interest to the extent to which it secures payment of such moneys owing and consents to Cable Makers registering this security interest under the PPSA and waives any right to receive notice of such registration. The purchaser must not do or permit anything to be done which may result in the purchase money security interest granted to Cable Makers ranking in priority behind any other security interest.</li>
                            <li>Until such payment in full, the purchaser acknowledges that the goods are held by the purchaser as bailee for Cable Makers and that a fiduciary relationship exists between Cable Makers and the purchaser in relation to the goods, which must be stored separately as a fiduciary of Cable Makers in good condition and in such a way which clearly indicates the ownership of Cable Makers in the goods.</li>
                            <li>While Cable Makers retains title in the goods the purchaser shall not bail, pledge, mortgage, charge, obtain or grant a lien over, lease or assign by any other way the goods or any security in the goods.</li>
                            <li>The purchaser irrevocably authorises Cable Makers by its servants or agents to enter to enter upon any site where the goods are located to take possession of the goods without any prior notice or for any purpose connected with or in relation to the protection or enforcement of the rights of Cable Makers to the goods.</li>
                            <li>The purchaser shall be liable for the payment of all costs, charges and expenses incurred by Cable Makers on a full indemnity basis (including legal costs, repossession costs and the cost of any mercantile agent) in the recovery or attempted recovery of the goods or of payment of any moneys owing by the purchaser to Cable Makers or in the protection or enforcement of its rights in relation to the goods.</li>
                            <li>To secure payment of all moneys which may become payable by the purchaser to Cable Makers on any account whatsoever the purchaser hereby charges with the due payment of all moneys payable by the purchaser to Cable Makers all of the purchaser’s beneficial interests in freehold or leasehold property held by it now or in the future as security for payment of all and any moneys payable by the purchaser to Cable Makers and consents to Cable Makers lodging a caveat or caveats noting its interest in such property, and upon demand by Cable Makers the purchaser agrees to immediately execute a mortgage or other instrument in terms satisfactory to Cable Makers to further secure payment of such moneys. The purchaser hereby and by way of security irrevocably appoints every officer and legal practitioner of Cable Makers jointly and each of them severally as the purchaser’s lawful attorney with the power and for the purpose of executing (including as a deed) a mortgage or other instrument of security in any form as determined by such attorney over any real property of the purchaser to secure such moneys.</li>
                        </ol>
                    </article>
                    <article>
                        <div className="article-header">
                            <h2>Disputes</h2>
                        </div>
                        <p>If the purchaser disputes any charge appearing on an invoice then the purchaser shall give written notice of such dispute to Cable Makers immediately upon receipt of invoice and shall pay all other charges not in dispute on the invoice pending an investigation of the dispute.</p>
                    </article>
                </div>
            </div>
        </motion.div>
    );
};

export default TermsAndConditions;
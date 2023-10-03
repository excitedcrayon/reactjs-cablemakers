import { motion } from "framer-motion";
import { pagetransition } from "../../animation/PageTransition";

const BusinessCard = ({ business }) => {
    return (
        <>
            {business.text 
                ? 
                <motion.div className="business-card" initial={{ opacity: 1, scale: 0 }} whileInView={{ opacity: 1, scale: 1}} exit={{ opacity: 0, scale: 0 }} transition={pagetransition}>
                    <span>{business.text}</span>
                </motion.div> : ''}
        </>
    )
}

export default BusinessCard;
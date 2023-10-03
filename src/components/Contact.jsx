import { useState, useEffect } from "react";
import branchesData from "../assets/file/branches.json";
import { motion } from "framer-motion";
import { pagevariant } from "../animation/PageVariant";
import { pagetransition } from "../animation/PageTransition";
import BranchLocation from "./common/BranchLocation";

const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        contact: '',
        email: '',
        enquiry: '',
    });

    const [error, setErrors] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData, [name] : value // map back to name, contact, email etc
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = {}
        if(!formData.name.trim()){
            validationErrors.name = "Name is required";
        }
        if(!formData.contact.trim()){
            validationErrors.contact = "Contact number is required";
        }
        if(!formData.email.trim()){
            validationErrors.email = "Email is required";
        }
        if(!formData.enquiry.trim()){
            validationErrors.enquiry = "Your enquiry/comment is required";
        }

        setErrors(validationErrors);

        if(Object.keys(validationErrors).length === 0){
            console.log('Form submitted');
        }
    }

    return(
        <motion.div initial="out" animate="in" exit="out" variants={pagevariant} transition={pagetransition}>
            <div className="page-wrapper">
                <div className="page-header contact-header" data-header-name="Contact">
                    <h1>Contact</h1>
                </div>
                <div className="articles contact-article-flex-half">
                    <article className="contact-form-article">
                        <div className="article-header-image sub-header-image contact-us cablemakers-hue">
                            <h2>Send Us A Message</h2>
                        </div>
                        <div className="contact-form">
                            <form autoComplete="off" onSubmit={handleSubmit}>
                                <div className="form-required">
                                    <small><sup>*</sup> Required fields</small>
                                </div>
                                <div className="form-row">
                                    <label>Name <sup>*</sup></label>
                                    <input type="text" aria-label="Name Field" name="name" onChange={handleChange}/>
                                    {error.name && <span>{error.name}</span>}
                                </div>
                                <div className="form-row">
                                    <label>Company</label>
                                    <input type="text" aria-label="Company Name Field" name="company" onChange={handleChange}/>
                                </div>
                                <div className="form-row">
                                    <label>Contact Number <sup>*</sup></label>
                                    <input type="text" aria-label="Contact Number Field" name="contact" onChange={handleChange}/>
                                    {error.contact && <span>{error.contact}</span>}
                                </div>
                                <div className="form-row">
                                    <label>Email <sup>*</sup></label>
                                    <input type="text" aria-label="Email Field" name="email" onChange={handleChange}/>
                                    {error.email && <span>{error.email}</span>}
                                </div>
                                <div className="form-row">
                                    <label>Enquiry/Comment <sup>*</sup></label>
                                    <textarea name="enquiry" aria-label="Enquriry/Comment Text Area" cols="30" rows="10" onChange={handleChange}></textarea>
                                    {error.enquiry && <span>{error.enquiry}</span>}
                                </div>
                                <div className="form-submit">
                                    <button type="submit" title="Submit Form" aria-label="Submit button for the contact form">Submit</button>
                                </div>
                            </form>
                        </div>
                    </article>
                    <article className="contact-maps-article">
                        <div className="contact-locations">
                            {branchesData.map((branch) => {
                                return(
                                    branch != null || branch != '' ? <BranchLocation key={branch.id} branch={branch} /> : ''
                                )
                            })}
                        </div>
                    </article>
                </div>
            </div>
        </motion.div>
    );
};

export default Contact;
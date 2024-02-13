import { useEffect, useState } from "react";
import branchesData from "../../public/data/branches.json";
import { motion } from "framer-motion";
import { pagevariant } from "../animation/PageVariant";
import { pagetransition } from "../animation/PageTransition";
import BranchLocation from "./common/BranchLocation";
import Toast from "./common/Toast";
import { Helmet } from "react-helmet-async";

const Contact = () => {

    let contactURL = 'https://archived-forms.bgwgroup.com.au/cablemakers/contact.php';

    const [formData, setFormData] = useState({
        name: '',
        company: '',
        contact: '',
        email: '',
        enquiry: '',
    });

    const [error, setErrors] = useState({});

    const [trigger, setTrigger] = useState(false);

    const checkTriggerState = () => {
        if(formData.name.trim() !== '' && formData.contact.trim() !== '' && formData.email.trim() !== '' && formData.enquiry.trim() !== ''){
            setTrigger(true);
        }else{
            setTrigger(false);
        }
        return trigger;
    };

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
        }else{ validationErrors.name = ""; }

        if(!formData.contact.trim()){
            validationErrors.contact = "Contact number is required";
        }else{ validationErrors.contact = ""; }

        if(!formData.email.trim()){
            validationErrors.email = "Email is required";
        }else { validationErrors.email = ""; }

        if(!formData.enquiry.trim()){
            validationErrors.enquiry = "Your enquiry/comment is required";
        }else{ validationErrors.enquiry = ""; }

        setErrors(validationErrors);

        if(trigger){
            let form = new FormData();
            form.append('name', formData.name);
            form.append('company', formData.company);
            form.append('contact', formData.contact);
            form.append('email', formData.email);
            form.append('enquiry', formData.enquiry);

            fetch(contactURL, { 
                method: 'POST',
                body: form,
            }).then((req) => req.json())
            .then((res) => {
                if(res.success){
                    setTimeout(() => {
                        window.location.reload();
                    }, 3000);
                }
            })
            .catch((err) => console.log(err));
        }
    }

    useEffect(() => {

    },[branchesData])

    return(
        <>
        <Helmet>
            <title>Cablemakers | Contact</title>
            <meta name="description" content="We have access to specialist manufacturers for all your cable requirements. Contact us today to find out more."/>
            <meta name="keywords" content="Cable Makers North Queensland, cable, north brisbane, Online Quote Form"/>
        </Helmet>
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
                                    <input type="text" aria-label="Name Field" name="name" placeholder="Cable Makers" onChange={handleChange}/>
                                    {error.name && <span className="form-error">{error.name}</span>}
                                </div>
                                <div className="form-row">
                                    <label>Company</label>
                                    <input type="text" aria-label="Company Name Field" name="company" placeholder="My Company Pty Ltd" onChange={handleChange}/>
                                </div>
                                <div className="form-row">
                                    <label>Contact Number <sup>*</sup></label>
                                    <input type="text" aria-label="Contact Number Field" name="contact" placeholder="+61 4xx xxx xxx" onChange={handleChange}/>
                                    {error.contact && <span className="form-error">{error.contact}</span>}
                                </div>
                                <div className="form-row">
                                    <label>Email <sup>*</sup></label>
                                    <input type="text" aria-label="Email Field" name="email" placeholder="desk@cablemakers.com.au" onChange={handleChange}/>
                                    {error.email && <span className="form-error">{error.email}</span>}
                                </div>
                                <div className="form-row">
                                    <label>Enquiry/Comment <sup>*</sup></label>
                                    <textarea name="enquiry" aria-label="Enquriry/Comment Text Area" cols="30" rows="10" placeholder="Do you have any insulated cables?" onChange={handleChange}></textarea>
                                    {error.enquiry && <span className="form-error">{error.enquiry}</span>}
                                </div>
                                <div className="form-submit">
                                    <button type="submit" title="Submit Form" aria-label="Submit button for the contact form" onClick={checkTriggerState}>Submit</button>
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
        {/* Show toast when email has been sent */}
        {trigger && <Toast />}
        </>
    );
};

export default Contact;
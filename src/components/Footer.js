import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ContactForm from "./ContactForm";

const Footer = () => {
    return(
        <footer className="Footer">
           <p>Built and designed by Jessica Bommer</p>
           <div className="built-with">
            <FontAwesomeIcon icon={['fab', 'react']} size="2x" color="white"/>
            <FontAwesomeIcon icon={['fab', 'bootstrap']} size="2x" color="white"/>
            <FontAwesomeIcon icon={['fab', 'js']} size="2x" color="white"/>
            <FontAwesomeIcon icon={['fab', 'html5']} size="2x" color="white"/>
            <FontAwesomeIcon icon={['fab', 'css3']} size="2x" color="white"/>
            </div>
        </footer>
    )
};

export { Footer };
import React from "react";
import {
    BrowserRouter as Link
  } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const SiteLinks = () => {
        return(
    <div className="site-links no-bull"> 

        <div className="row-3">
        <li><a href="https://www.linkedin.com/in/jessicabommer/"><FontAwesomeIcon icon={['fab', 'linkedin']} size="10x"/></a></li>
        <li><a href="https://github.com/JazBom"><FontAwesomeIcon icon={['fab', 'github']} size="10x"/></a></li>
        <li><a href="https://www.instagram.com/jessish_art/"><FontAwesomeIcon icon={['fab', 'instagram']}  size="10x"/></a></li>
            
            
            
        </div>

    </div>
)
};

export { SiteLinks };



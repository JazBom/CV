import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const SiteLinks = () => {
        return(
    <div className="site-links"> 

        <div className="row-3">
            <FontAwesomeIcon icon={['fab', 'github']} size="10x"/>
            <FontAwesomeIcon icon={['fab', 'linkedin']} size="10x"/>
            <FontAwesomeIcon icon={['fab', 'instagram']}  size="10x"/>
        </div>

    </div>
)
};

export { SiteLinks };



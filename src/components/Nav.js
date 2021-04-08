import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    BrowserRouter as Link
  } from "react-router-dom";
  import Button from 'react-bootstrap/Button';

const Nav = () => {
        return(
              <div className="navigation">

<Button variant="info" className="homeButton" href="/home"></Button>
<ul className="nav-contact no-bull">

<li><a href="tel:0414-441-558"><FontAwesomeIcon icon="mobile-alt" size="x2"/></a> Call</li>
<li><a href="mailto: jessica.bommer@gmail.com"><FontAwesomeIcon icon="paper-plane" size="x2"/></a> Email</li>
<li><a href="../public/PlaceholderCV.pdf" download><FontAwesomeIcon icon="arrow-down" size="x2"/></a> CV</li>
</ul>

<ul className="nav-webdev no-bull">
<li><Link to="/projects">Projects</Link></li>

<li><a href="https://www.linkedin.com/in/jessicabommer/"><FontAwesomeIcon icon={['fab', 'linkedin']} size="lg"/></a></li>
<li><a href="https://github.com/JazBom"><FontAwesomeIcon icon={['fab', 'github']} size="lg"/></a></li>
<li><a href="https://www.instagram.com/jessish_art/"><FontAwesomeIcon icon={['fab', 'instagram']} size="lg"/></a></li>
<li><a href="https://www.jessicabommer.com"><FontAwesomeIcon icon="palette" size="lg"/></a></li>


</ul>

</div>
        )
    };

    export { Nav }
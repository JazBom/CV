import React from "react";
import {
    BrowserRouter as Link
  } from "react-router-dom";
  import Button from 'react-bootstrap/Button';

const Nav = () => {
        return(
              <div className="navigation">

<Button variant="info" className="homeButton" href="/home"></Button>
<ul className="nav-contact no-bull">

<li><a href="tel:0414-441-558">Call me</a></li>
<li><a href = "mailto: jessica.bommer@gmail.com">Email me</a></li>
<li><Link to="">Download CV</Link></li>
</ul>

<ul className="nav-webdev no-bull">
<li><Link to="/projects">Dev Projects</Link></li>
<li><a href="https://www.jessicabommer.com">Art</a></li>
<li><a href="https://github.com/JazBom">GitHub</a></li>

</ul>

</div>
        )
    };

    export { Nav }
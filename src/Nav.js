import React from "react";
import {
    BrowserRouter as Link
  } from "react-router-dom";
  import Button from 'react-bootstrap/Button';

const Nav = () => {
        return(
              <div className="navigation">

<Button variant="info" className="homeButton" href="/home"></Button>
  
<ul className="nav no-bull">
<li><Link to="/webdevelopment">Web</Link></li>
<li><Link to="/art">art</Link></li>
<li><a href='#Footer'>Location</a></li>
<li><a href='#Footer'>Contact</a></li>
</ul>

</div>
        )
    };

    export { Nav }
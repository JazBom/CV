import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Languages = () => {
        return(
   
    <div className="languages">

    {/* <img className="languages-logos" src="https://i.imgur.com/FUdEHQQ.png?1"/> */}

    <div className="row-1">

    <ul className="no-bull">
    <li><FontAwesomeIcon icon={['fab', 'html5']} size="1x" color=""/> HTML</li>
    <li><FontAwesomeIcon icon={['fab', 'css3']} size="1x" color=""/>  CSS</li>  
    <li><FontAwesomeIcon icon={['fab', 'js']} size="1x" color=""/> Javascript</li> 
    </ul>

    <ul className="no-bull">
    
    <li><FontAwesomeIcon icon={['fab', 'node']} size="lg" color=""/> NodeJS & Express</li>   
    <li><FontAwesomeIcon icon={['fab', 'parcel']} size="1x" color=""/> Parcel</li>  
    </ul>

    <ul className="no-bull">
    <li><FontAwesomeIcon icon={['fab', 'react']} size="1x" color=""/> ReactJS</li>
    </ul>

    <ul className="no-bull">  
    <li><FontAwesomeIcon icon="gem" size="1x" color=""/> Ruby-on-Rails</li> 
    </ul>

     <ul className="no-bull teal">
    <li><FontAwesomeIcon icon={['fab', 'php']} size="1x" color=""/> PHP</li> 
    <li><FontAwesomeIcon icon={['fab', 'wordpress']} size="1x" color=""/> Wordress</li>
    </ul>

    <ul className="no-bull">
    <li><FontAwesomeIcon icon="database" size="1x" color=""/> SQL & NOSQL</li>
    </ul> 

    <ul className="no-bull blue">
    <li><FontAwesomeIcon icon={['fab', 'git']} size="1x" color=""/> Git</li>
    <li><FontAwesomeIcon icon={['fab', 'github']} size="1x" color=""/> Github</li>
    </ul>

   
    
    </div>  
    </div>

)
};

export {Languages};



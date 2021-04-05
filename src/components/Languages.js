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
    
    <li><FontAwesomeIcon icon={['fab', 'node']} size="1x" color=""/> NodeJS</li> 
    <li><FontAwesomeIcon icon={['fab', 'express']} size="1x" color=""/> Express</li>   
    <li><FontAwesomeIcon icon={['fab', 'parcel']} size="1x" color=""/> Parcel</li>  
    <li><FontAwesomeIcon icon={['fab', 'homebrew']} size="1x" color=""/> Homebrew</li>    

    </ul>

    <ul className="no-bull">
    <li><FontAwesomeIcon icon={['fab', 'react']} size="1x" color=""/> ReactJS</li>
    <li><FontAwesomeIcon icon={['fab', 'jsx']} size="1x" color=""/> JSX</li> 
    </ul>

    <ul className="no-bull">  
    <li><FontAwesomeIcon icon={['fab', 'ruby']} size="1x" color=""/> Ruby</li> 
    <li><FontAwesomeIcon icon={['fab', 'rails']} size="1x" color=""/> Rails</li>  
    </ul>

     <ul className="no-bull teal">
    <li><FontAwesomeIcon icon={['fab', 'php']} size="1x" color=""/> PHP</li> 
    <li><FontAwesomeIcon icon={['fab', 'wordpress']} size="1x" color=""/> Wordress</li>
    </ul>

    <ul className="no-bull">
    <li><FontAwesomeIcon icon={['fab', 'sql']} size="1x" color=""/> SQL</li>
    <li><FontAwesomeIcon icon={['fab', 'nosql']} size="1x" color=""/> NOSQL</li>
    <li><FontAwesomeIcon icon={['fab', 'compass']} size="1x" color=""/> MongoDB</li>
    <li><FontAwesomeIcon icon={['fab', 'postgres']} size="1x" color=""/> Postgres</li>
    </ul> 

    <ul className="no-bull blue">
    <li><FontAwesomeIcon icon={['fab', 'git']} size="1x" color=""/> Git</li>
    <li><FontAwesomeIcon icon={['fab', 'github']} size="1x" color=""/> Github</li>
    <li><FontAwesomeIcon icon={['fab', 'fork']} size="1x" color=""/> Fork</li>
    <li><FontAwesomeIcon icon={['fab', 'bash']} size="1x" color=""/> Bash</li>
    </ul>

   
    
    </div>  
    </div>

)
};

export {Languages};


